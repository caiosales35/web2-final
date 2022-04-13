import { useState } from "react"
import { Link } from "react-router-dom"
import { Footer } from "../../components/footer"
import { companyPoint } from "../../constants"

export const NewCompany = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [CNPJ, setCNPJ] = useState('')
    const [value, setValue] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault();
        
        let data = {};
        data.email = email
        data.senha = password
        data.descricao = description
        data.nome = name
        data.cnpj = CNPJ
        data.value = value
        const json = JSON.stringify(data)

        let xhr = new XMLHttpRequest();
        xhr.open("POST", companyPoint, true);
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
        setName('')
        setDescription('')
        setCNPJ('')
        setValue('')
    }

    return (
        <div class="container">
            <main>
                <h1>Adicionar imobiliária</h1>
                <p id="subtitle" >Preencha corretamente todos os campos para adicionar uma nova imobiliária</p>
                <div class="form">
                    <form onSubmit={handleSubmit}>
                    <label for="email">Email:</label>
                        <input type="email" id="email" maxlength="20" required value={email} onChange={(event => setEmail(event.target.value))}/>
                        <br />
                        <br />
                        <label for="senha">Senha:</label>
                        <input type="password" id="senha" maxlength="20" required value={password} onChange={(event => setPassword(event.target.value))} />
                        <br />
                        <br />
                        <label for="nome">Nome:</label>
                        <input type="text" id="nome" maxlength="20" required value={name} onChange={(event => setName(event.target.value))} />
                        <br />
                        <br />
                        <label for="descricao">Descrição:</label>
                        <textarea id="descricao" rows="4" cols="40" value={description} onChange={(event => setDescription(event.target.value))} />
                        <br />
                        <br />
                        <label for="CNPJ">CNPJ:</label>
                        <input type="text" id="CNPJ" maxlength="14" required value={CNPJ} onChange={(event => setCNPJ(event.target.value))} />
                        <br />
                        <br />
                        <button type="submit" >Adicionar</button>
                        <button onClick={cleanForm}>Limpar</button>
                        <Link to="/company" >Voltar</Link>
                    </form> 
                </div>
            </main>
            <hr />
            <Footer/>
        </div>
    )
}
    
    