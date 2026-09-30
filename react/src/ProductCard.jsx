import { useState } from 'react'
function ProductCard({ produto }) {
    const [quantidade, setQuantidade] = useState(0)
    {quantidade > 0 && <p>Produto adicionado ao carrinho! 🛒</p>}
    

  return (

    <div className="product-card">

      <h2>{produto.title}</h2>
      <img src={produto.image} alt={produto.title} width="200" height="200" />   
      <p> {produto.category}</p>
      <p>{produto.rating.rate} ({produto.rating.count} reviews)</p>
      <p>{produto.description}</p>
      <p>${produto.price.toFixed(2)}</p>
      <p>Quantidade: {quantidade}</p>
      <button onClick={() => setQuantidade(quantidade + 1)}>Adicionar ao Carrinho</button>
    </div>
    
  )

}

export default ProductCard