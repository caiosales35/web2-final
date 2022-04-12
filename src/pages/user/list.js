import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../../components/footer'
import { UserList } from '../../components/userList'
import { userEndPoint } from '../../constants'
import '../../styles/main.css'

export const ListUser = () => {
    const [usuarios, setUsuarios ] = useState()

    const listarUsuarios = async () => {
        fetch(userEndPoint)
        .then((resposta) => resposta.json())
        .then((jsonResposta) =>  setUsuarios(jsonResposta));
    }

    const excluirUsuario = (id) => {
        const xhr = new XMLHttpRequest();
        xhr.open('DELETE', `${userEndPoint}/${id}`, true)
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert('Usuario excluido!')
                document.location.reload(true);
            } else if (xhr.readyState === 4 && xhr.status !== 200){
                console.error(xhr.responseText)
                alert('Erro ao deleter...')
            }
        }
        xhr.send();
    }

    useEffect(() => {
        listarUsuarios()
    }, [])

    return (
        <div class="container">
            <main>
                <h1>Listagem de usuários</h1>
                <div class="mb">
                    <p id="subtitle" >Listagem de usuários cadastrados</p>
                    <Link to="/user/new" >Novo</Link>
                </div>
                <div class="cardList" id="rootDiv">
                    {usuarios && <UserList usuarios={usuarios} onDelete={excluirUsuario}/>}
                </div>
            </main>
            <br />
            <br />
            <hr />
            <Footer />
        </div>
    )
}