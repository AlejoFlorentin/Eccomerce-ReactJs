import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();



export const CartProvider = ({children}) => {

const [carrito,setCarrito]=useState([])


   const agregar = (item, cantidad) => {
        if (estaEnElCarrito(item.id)) {
            let product = carrito.find(prod => prod.id === item.id);
            product.cantidad += cantidad;
            setCarrito([...carrito]);
        } else {
            setCarrito([...carrito, {...item, cantidad:cantidad}]);
        }
    }

    const estaEnElCarrito = (id) => {
        return carrito.some(item => item.id === id);
    }


    const actualizarNumeroCarrito = () =>{
      return carrito.reduce((acc,prod) => acc + prod.cantidad ,0)
    }

    const calcularTotal = () => {
      return carrito.reduce ((acc,prod) => acc + (parseInt(prod.price)*prod.cantidad),0)
    }

    const vaciarCarrito = () => {
      setCarrito([])
     
    }

   const eliminarItem = (id) => {

    const prodEliminar=carrito.filter(item => item.id !== id)
    setCarrito(prodEliminar)
    
   }
    

    return (
    <CartContext.Provider value={{
        agregar,
        actualizarNumeroCarrito
        ,carrito,
        calcularTotal,
        vaciarCarrito,
        eliminarItem
        }}>
        {children}
    </CartContext.Provider>
    )
  
}