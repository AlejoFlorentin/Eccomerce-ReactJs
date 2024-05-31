import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Footer from './components/Footer'
import { CartProvider } from './context/CartContext'
import Carrito from './components/Carrito'
import Checkout from './components/Checkout'
import Error404 from './components/Error404'



function App() {

  
  
  return (
    
     <CartProvider>
    <BrowserRouter>

    <NavBar/>

    <Routes>

    <Route exact path={'/'} element={<ItemListContainer/>}/>
    <Route exact path={'/categoria/:idCategoria'} element={<ItemListContainer/>}/>
    <Route exact path={'/productos'} element={<ItemListContainer/>}/>
    <Route exact path={'/productos/:idProducto'} element={<ItemDetailContainer/>}/>
    <Route exact path={'*'} element={<Error404/>}/>
    <Route exact path={'/carrito'} element={<Carrito/>}/>
    <Route exact path={'/checkout'} element={<Checkout/>}/>
    
    

    </Routes>

    <Footer/>

    </BrowserRouter>
    </CartProvider>    
    
     
    
    
    
    
  )
}

export default App
