import ProductCard from '../ProductCard'
import { useEffect, useState } from 'react'

function Home() {

  const [produtosApi, setProdutosApi] = useState([])
  const [categoria, setCategoria] = useState("todas")
  const [busca, setBusca] = useState("")
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(false)

  useEffect(() => {

    fetch("https://fakestoreapi.com/products")
      .then((resposta) => {
        return resposta.json()
      })
      .then((dados) => {
        console.log(dados)
        setProdutosApi(dados)
        setCarregando(false)
        setErro(false)
      })
      .catch(() => {
        setErro(true)
        setCarregando(false)
      })

  }, [])

  const produtosFiltrados = categoria === "todas"
    ? produtosApi
    : produtosApi.filter((produto) => produto.category === categoria)

  const produtosBuscados = busca
    ? produtosFiltrados.filter((produto) =>
        produto.title.toLowerCase().includes(busca.toLowerCase())
      )
    : produtosFiltrados

  return (
    <div>

      <h1>Fit Store</h1>

      {carregando && <p>Carregando produtos...</p>}

      {erro && <p>Erro ao carregar produtos.</p>}

      <input
        type="text"
        placeholder="Buscar produto..."
        value={busca}
        onChange={(evento) => setBusca(evento.target.value)}
      />

      <button onClick={() => setCategoria("women's clothing")}>
        Roupas Femininas
      </button>

      <button onClick={() => setCategoria("men's clothing")}>
        Roupas Masculinas
      </button>

      <button onClick={() => setCategoria("jewelery")}>
        Joias
      </button>

      <button onClick={() => setCategoria("electronics")}>
        Eletrônicos
      </button>

      <button onClick={() => setCategoria("todas")}>
        Todas as Categorias
      </button>

      {categoria !== "todas" && (
        <h2>Produtos da categoria: {categoria}</h2>
      )}

      {categoria === "todas" && (
        <h2>Todos os produtos</h2>
      )}

      <div className="produtos">

        {produtosBuscados.map((produto) => {
          return (
            <ProductCard
              key={produto.id}
              produto={produto}
            />
          )
        })}

      </div>

    </div>
  )
}

export default Home