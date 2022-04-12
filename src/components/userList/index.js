import React from 'react';

export const UserList = ({ usuarios, onDelete }) => {
    return usuarios.map(usuario => {
        return (
            <div class="card" key={usuario.id}>
                <p>Email: {usuario.email}</p>
                <p>Senha: {usuario.senha}</p>
                <p>Papel: {usuario.papel}</p>
                <button onClick={() => onDelete(usuario.id)}>Excluir</button>
            </div>
        )
    })
}