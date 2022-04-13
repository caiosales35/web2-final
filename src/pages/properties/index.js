import React, { useEffect, useState } from 'react'
import { Footer } from '../../components/footer'
import { PropertyList } from '../../components/propertyList'
import { propertyEndPoint } from '../../constants'
import '../../styles/main.css'

export const ListProperties = () => {
    const [imoveis, setImoveis ] = useState()

    const listarImoveis = async () => {
        fetch(propertyEndPoint)
        .then((resposta) => resposta.json())
        .then((jsonResposta) =>  setImoveis(jsonResposta));
    }

    useEffect(() => {
        listarImoveis()
    }, [])

    return (
        <div class="container">
            <main>
                <h1>Listagem de imóveis</h1>
                <div class="mb">
                    <p id="subtitle" >Listagem de imóveis cadastrados</p>
                </div>
                <div class="cardList" id="rootDiv">
                    {imoveis && <PropertyList imoveis={imoveis}/>}
                </div>
            </main>
            <br />
            <br />
            <hr />
            <Footer />
        </div>
    )
}