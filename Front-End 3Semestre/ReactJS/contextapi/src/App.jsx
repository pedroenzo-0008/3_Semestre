import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Perfil from './components/perfil/Perfil'
import Header from './components/header/Header'
import Produto from './components/produto/Produto'
import CadastrarProduto from './components/produto/cadastrarProduto'
import ListarProduto from "./components/produto/ListaProduto"
import { useState } from 'react'

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/perfil' element={<Perfil />} />
      <Route path='/produto' element={<Produto />} />
      <Route path='/cadastrar-produto' element={<CadastrarProduto />} />
      <Route path='/listar-produto' element={<ListarProduto />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
