import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../../components/footer'
import { userEndPoint } from '../../constants'
import '../../styles/main.css'
import { montarCardsUsuarios } from './utils'

export const ListUser = () => {
    const [usuarios, setUsuarios ] = useState()

    const listarUsuarios = async () => {
        fetch(userEndPoint)
        .then((resposta) => resposta.json())
        .then((jsonResposta) =>  setUsuarios(jsonResposta));
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
                
                {/* verificar funcao de excluir
                    provavelmente nao funcione assim.
                    criar um componente para os cards
                    e passar a funcao pra ele
                */}
                <div class="cardList" id="rootDiv">
                    {usuarios && montarCardsUsuarios(usuarios)}
                </div>
            </main>
            <br />
            <br />
            <hr />
            <Footer />
        </div>
    )
}