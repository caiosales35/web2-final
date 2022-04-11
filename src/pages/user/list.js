import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../../components/footer'
import '../../styles/main.css'

export const ListUser = () => {
    return (
        <div class="container">
            <main>
                <h1>Listagem de usuários</h1>
                <div class="mb">
                    <p id="subtitle" >Listagem de usuários cadastrados</p>
                    <Link to="/user/new" >Novo</Link>
                </div>
                
                <div class="cardList" id="rootDiv">
                    
                </div>
            </main>
            <br />
            <br />
            <hr />
            <Footer />
        </div>
    )
}