export const montarCardsUsuarios = (usuarios) => {
    const rootDiv = document.getElementById("rootDiv");
    const divsUsuarios = usuarios.map(usuario => cardUsuario(usuario))
    rootDiv.innerHTML = divsUsuarios
}

const cardUsuario = (usuario) => {
    return `<div class="card">
                <p>Email: ${usuario.email}</p>
                <p>Senha: ${usuario.senha}</p>
                <p>Papel: ${usuario.papel}</p>
                <button onClick="excluirUsuario(${usuario.id})">Excluir</button>
            </div>`
}