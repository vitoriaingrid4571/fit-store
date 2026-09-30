import { useState } from 'react'

function Clientes() {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [modo, setModo] = useState("login")
  const [emailLogin, setEmailLogin] = useState("")
  const [senhaLogin, setSenhaLogin] = useState("")
  const [logado, setLogado] = useState(false)

  function cadastrar() {

    localStorage.setItem("nome", nome)
    localStorage.setItem("email", email)
    localStorage.setItem("senha", senha)

    alert("Cadastro realizado com sucesso!")

    setModo("login")
  }

  function entrar() {

    const emailArmazenado = localStorage.getItem("email")
    const senhaArmazenada = localStorage.getItem("senha")

    if (
      emailLogin === emailArmazenado &&
      senhaLogin === senhaArmazenada
    ) {

      alert("Login realizado com sucesso!")

      localStorage.setItem("logado", "true")
      setLogado(true)

    } else {

      alert("Email ou senha incorretos!")

    }
  }

  return (
    <div>

      <h1>Área de Clientes</h1>

      <h2>Minha Conta</h2>
      <h2>Meus Dados</h2>
      <h2>Meus Pedidos</h2>

      {modo === "cadastro" && (
        <>
          <h3>Cadastro</h3>

          <label>Nome:</label>

          <input
            type="text"
            name="nome"
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
          />

          <label>Email:</label>

          <input
            type="email"
            name="email"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
          />

          <label>Senha:</label>

          <input
            type="password"
            name="senha"
            value={senha}
            onChange={(evento) => setSenha(evento.target.value)}
          />

          <button onClick={cadastrar}>
            Cadastrar
          </button>

          <button onClick={() => setModo("login")}>
            Já tenho uma conta
          </button>
        </>
      )}

      {modo === "login" && (
        <>
          <h3>Login</h3>

          <label>Email:</label>

          <input
            type="email"
            value={emailLogin}
            onChange={(evento) => setEmailLogin(evento.target.value)}
          />

          <label>Senha:</label>

          <input
            type="password"
            value={senhaLogin}
            onChange={(evento) => setSenhaLogin(evento.target.value)}
          />

          <button onClick={entrar}>
            Entrar
          </button>

          <button onClick={() => setModo("cadastro")}>
            Criar uma conta
          </button>
        </>
      )}

    </div>
  )
}

export default Clientes