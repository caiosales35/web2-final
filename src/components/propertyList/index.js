import React from 'react';

export const PropertyList = ({ imoveis }) => {
    return imoveis.map(imovel => {
        return (
            <div class="card" key={imovel.id}>
                <p>Nome: {imovel.nome}</p>
                <p>Descrição: {imovel.descricao}</p>
                <p>Cidade: {imovel.cidade}</p>
                <p>Bairro: {imovel.bairro}</p>
                <p>Valor: {imovel.valor}</p>
            </div>
        )
    })
}