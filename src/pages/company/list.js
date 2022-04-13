import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CompanyList } from '../../components/companyList'
import { Footer } from '../../components/footer'
import { companyPoint } from '../../constants'
import '../../styles/main.css'

export const ListCompany = () => {
    const [imobiliarias, setImobiliarias ] = useState()

    const listarImobiliarias = async () => {
        fetch(companyPoint)
        .then((resposta) => resposta.json())
        .then((jsonResposta) =>  setImobiliarias(jsonResposta));
    }

    const excluirImobiliaria = (id) => {
        const xhr = new XMLHttpRequest();
        xhr.open('DELETE', `${companyPoint}/${id}`, true)
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert('Imobiliaria excluida!')
                document.location.reload(true);
            } else if (xhr.readyState === 4 && xhr.status !== 200){
                console.error(xhr.responseText)
                alert('Erro ao deleter...')
            }
        }
        xhr.send();
    }

    useEffect(() => {
        listarImobiliarias()
    }, [])

    return (
        <div class="container">
            <main>
                <h1>Listagem de imobiliárias</h1>
                <div class="mb">
                    <p id="subtitle" >Listagem de imobiliárias cadastradas</p>
                    <Link to="/company/new" >Novo</Link>
                </div>
                <div class="cardList" id="rootDiv">
                    {imobiliarias && <CompanyList imobiliarias={imobiliarias} onDelete={excluirImobiliaria}/>}
                </div>
            </main>
            <br />
            <br />
            <hr />
            <Footer />
        </div>
    )
}