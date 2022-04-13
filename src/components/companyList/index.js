import React from 'react';

export const CompanyList = ({ imobiliarias, onDelete }) => {
    return imobiliarias.map(imobiliaria => {
        return (
            <div class="card" key={imobiliaria.id}>
                <p>Email: {imobiliaria.email}</p>
                <p>Senha: {imobiliaria.senha}</p>
                <p>Nome: {imobiliaria.nome}</p>
                <p>Descrição: {imobiliaria.descricao}</p>
                <p>CNPJ: {imobiliaria.cnpj}</p>
                <button onClick={() => onDelete(imobiliaria.id)}>Excluir</button>
            </div>
        )
    })
}