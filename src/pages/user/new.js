import { Link } from "react-router-dom"
import { Footer } from "../../components/footer"

export const NewUser = () => {
    return (
        <div class="container">
            <main>
                <h1>Adicionar usuário</h1>
                <p id="subtitle" >Preencha corretamente todos os campos para adicionar um novo usuário</p>
                <div class="form">
                    <form method="post">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" maxlength="20" required />
                        <br />
                        <br />
                        <label for="senha">Senha:</label>
                        <input type="password" id="senha" name="senha" maxlength="20" required />
                        <br />
                        <br />
                        <label for="tipo">Tipo:</label>
                        <select name="tipo" id="tipo" required>
                          <option value="ADMIN">ADMIN</option>
                          <option value="CLIENT">CLIENT</option>
                        </select> 
                        <br />
                        <br />
                        <input type="reset" value="Limpar" />
                        <Link to="/user" >Voltar</Link>
                    </form> 
                    <button onClick="adicionarUsuario()" >Adicionar</button>
                </div>
            </main>
            <hr />
            <Footer/>
        </div>
    )
}
    
    