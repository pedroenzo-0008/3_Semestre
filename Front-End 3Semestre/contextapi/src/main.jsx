import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UsuarioProvider } from './context/Usuario/UsuarioProvider.jsx'
import Produto from './components/produto/Produto.jsx'
import { ProdutosProvider } from './context/Produtos/ProdutosProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProdutosProvider>
    <UsuarioProvider>
    <App />
    </UsuarioProvider>
    </ProdutosProvider>
  </StrictMode>,
)
