import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Clientes from './pages/Clientes'
import './App.css'

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cliente" element={<Clientes />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App