import { useState } from "react"
import { Link } from "react-router-dom"
import { Footer } from "../../components/footer"
import { userEndPoint } from "../../constants"

export const NewUser = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [tipo, setTipo] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        
        let data = {};
        data.email = email
        data.senha = password
        data.papel = tipo
        const json = JSON.stringify(data);

        let xhr = new XMLHttpRequest();
        xhr.open("POST", userEndPoint, true);
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.setRequestHeader("Content-type","application/json");
        xhr.onload = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200 && xhr.responseText){
                    alert("Cadastrado com sucesso! - " + xhr.responseText);
                    cleanForm() 
                } else {
                    alert("Erro... " + xhr.responseText)
                }
            }  
        }
        xhr.send(json);
    }

    const cleanForm = () => {
        setEmail('')
        setPassword('')
        setTipo('')
    }

    return (
        <div class="container">
            <main>
                <h1>Adicionar usuário</h1>
                <p id="subtitle" >Preencha corretamente todos os campos para adicionar um novo usuário</p>
                <div class="form">
                    <form onSubmit={handleSubmit}>
                        <label for="email">Email:</label>
                        <input type="email" id="email" maxlength="20" required value={email} onChange={(event => setEmail(event.target.value))}/>
                        <br />
                        <br />
                        <label for="senha">Senha:</label>
                        <input type="password" id="senha" maxlength="20" required value={password} onChange={(event => setPassword(event.target.value))}/>
                        <br />
                        <br />
                        <label for="tipo">Tipo:</label>
                        <select id="tipo" required value={tipo} onChange={(event => setTipo(event.target.value))} >
                          <option value="ADMIN">ADMIN</option>
                          <option value="CLIENT">CLIENT</option>
                        </select> 
                        <br />
                        <br />
                        <button type="submit" >Adicionar</button>
                        <button onClick={cleanForm}>Limpar</button>
                        <Link to="/user" >Voltar</Link>
                    </form> 
                </div>
            </main>
            <hr />
            <Footer/>
        </div>
    )
}
    
    