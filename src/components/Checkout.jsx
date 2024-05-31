import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import productos from "../data/Productos.json"

const Checkout =  () => {

    const {carrito,calcularTotal,vaciarCarrito} = useContext(CartContext)
    const [nombre , setNombre] = useState("")
    const [telefono , setTelefono] = useState("")
    const [email , setEmail] = useState("")
    const [emailConfirmacion , setEmailConfirmacion] = useState ("")
    const[orderId, setOrderId] = useState("")

    const generarOrden = () => {

        const comprador = {nombre:nombre, email:email, telefono:telefono}
        const items = carrito.map(item=>({id:item.id,title:item.title,price:item.price,cantidad:item.cantidad}))
        const date = new Date();
        const currentDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        const order = {comprador:comprador, items:items,date:currentDate,total:calcularTotal()}

        const db = getFirestore()
        const ordersCollection = collection(db , "orders")
        addDoc(ordersCollection,order)
        .then(data =>{
            setOrderId(data.id)
        })

        vaciarCarrito()
    }

    if(orderId){
        return(
            <div className="container text-center mt-5">
                <i class='bx bxs-check-circle check'></i>
                <h1>¡Gracias por tu compra!</h1>
                <h4>Tu n° de orden es <b>{orderId}</b></h4>
            </div>
            )
    }



return(
    <main className="container mb-5 ">
        <div className="row mt-5 ">
            <div className="col">
                <form action="">
                <div className="bm-3 mb-3">
                    <label htmlFor="" className="form-label">Nombre completo</label>
                    <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}}/>
                </div>
                <div className="bm-3 mb-3">
                    <label htmlFor="" className="form-label">Telefono</label>
                    <input type="text" className="form-control" onInput={(e) => {setTelefono(e.target.value)}}/>
                </div>
                <div className="bm-3 mb-3">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="email" className="form-control" onInput={(e) => {setEmail(e.target.value)}}/>
                </div>
                <div className="bm-3 mb-3">
                    <label htmlFor="" className="form-label">Repetir Email</label>
                    <input type="email" className="form-control" onInput={(e) => {setEmailConfirmacion(e.target.value)}}/>
                </div>
                <div>
                    {emailConfirmacion && emailConfirmacion !== email ? 
                    <div className="alert alert-danger" role="alert">Email incorrecto</div> : ""
                    }
                </div>
                <div className="d-flex justify-content-center mt-2 ">
                {nombre && telefono && email && email === emailConfirmacion ? <button  type="button" className="btn btn-primary button-comprar" onClick={generarOrden}>Generar Orden</button> : ""} 
                </div>
                </form>
                
            </div>

            <div className="col ">

                {carrito.map(item => (
                    <div key={item.id}>
                     <div className="checkout container d-flex flex-row justify-content-around align-items-center mb-4 border-bottom pb-3">
                        <img src={item.img} alt={item.nombre} />
                        <div>
                            <h5>{item.title} x {item.cantidad}</h5>
                        </div>
                        <div>
                            <p>$ {item.price}</p>
                        </div>
                     </div>
                      
                    </div>
                    
                    
                ))}
                    <div className="d-flex flex-row justify-content-end me-5">
                            <h5 className="me-5">Total </h5>
                            <p>$ {calcularTotal()}</p>   
                    </div>  
            </div>
        </div>
    </main>
)

}

export default Checkout