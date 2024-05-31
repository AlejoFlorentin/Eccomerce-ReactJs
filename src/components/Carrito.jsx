import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const Carrito = () => {

const {carrito,calcularTotal,vaciarCarrito,eliminarItem} = useContext(CartContext)



return(
 <header className="container">
    {carrito.map(prod=>(
      <div key={prod.id} className="cart-item d-flex flex-row justify-content-evenly align-items-center mt-5  bg-body-secondary ">
        <img src={prod.img} alt="" />
        <h4>{prod.title}</h4> 
        <div className="d-flex flex-column align-items-center">
          <p>Cantidad</p>
          <p>{prod.cantidad}</p>    
        </div>
        <div className="d-flex flex-column align-items-center">
          <p>Precio</p>
          <p>$ {prod.price}</p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <p>Subtotal</p>
          <p>$ {calcularTotal()}</p>    
        </div>
        <div>
          <button onClick={()=>eliminarItem(prod.id)} className="delete text-danger bg-body-secondary"><i class='bx bxs-trash'></i></button>
        </div>
      </div>
    ))}

    {carrito.length > 0 ?
      <div className="d-flex flex-row  mt-5 justify-content-around action-cart border-top mb-5">
        <div className="mt-3 cart-btn d-flex flex-row justify-content-evenly">
          <button  type="button" className="btn-agregar btn btn-dark " onClick={vaciarCarrito}>Vaciar</button>
          <Link to="/checkout"><button type="button" className="btn-agregar btn btn-dark " >Finalizar Compra</button></Link>  
        </div>
        <h5 className="mt-5">Total   $   {calcularTotal()}</h5>
      </div>  
      :
      <div className="cart-empty text-center mt-5">
        <i class='bx bx-sad text-danger'></i>
        <h2>¡Carrito vacio!</h2>
        <Link className="fs-5" to='/productos'>Volver al Catalogo</Link> 
      </div>
    }
  </header>
  )

}

export default Carrito