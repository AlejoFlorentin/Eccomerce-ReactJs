import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { useEffect } from 'react'
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Footer from './components/Footer'


function App() {
  
  return (
    <BrowserRouter>

    <NavBar/>

    <Routes>

    <Route exact path={'/'} element={<ItemListContainer/>}/>
    <Route exact path={'/categoria/:idCategoria'} element={<ItemListContainer/>}/>
    <Route exact path={'/productos'} element={<ItemDetailContainer/>}/>
    <Route exact path={'/productos/:idProducto'} element={<ItemDetailContainer/>}/>
    

    </Routes>

    <Footer/>

    </BrowserRouter>
  )
}

export default App
