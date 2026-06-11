  import { useState } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from './assets/vite.svg'
  import heroImg from './assets/hero.png'
  import './App.css'
  import { BrowserRouter, Routes, Route } from 'react-router-dom'
  import Header from './components/header/Header'
  import Home from './components/home/Home'
  import Perfil from './components/perfil/Perfil'
  import CadastroProduto from './components/produto/CadastroProduto'
  import Produto from './components/produto/Produto'
  import PrivateRoute from './routes/PrivateRoute'
  import ListarProduto from './components/produto/ListarProduto'

  function App() {

    return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/produto" element={
          <PrivateRoute>
          <Produto />
          </PrivateRoute>
          } />
        <Route>
          <Route path="/lista" element={
            <PrivateRoute>
              <ListarProduto />
            </PrivateRoute>
          } />
        </Route>
        <Route path="/cadastro" element={
          <PrivateRoute>
            <CadastroProduto />
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
    )
  }

  export default App
