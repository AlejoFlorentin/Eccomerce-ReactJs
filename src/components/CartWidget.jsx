import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

const CartWidget = () => {

const {actualizarNumeroCarrito} = useContext(CartContext)

return(
  <Link className="text-decoration-none" to='/carrito'>
    <div className="d-flex me-4">
      <i className='bx bx-cart me-2  '></i>
      <p className="text-white">{actualizarNumeroCarrito()}</p>
    </div>
  </Link>  
)
}

export default CartWidget