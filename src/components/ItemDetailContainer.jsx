import { useEffect, useState } from "react"
import productos from '../data/Productos.json'
import { useParams } from "react-router-dom"
import ItemCount from "./ItemCount"

const ItemDetailContainer = () => {
    
   
    
    const [prendas,setPrendas] = useState([])

    const {idProducto}=useParams()
    
    

    useEffect(() => {

        const promesa = new Promise((resolve, reject) => {

           const filtrarPrendas=productos.find(item=> item.id === parseInt(idProducto))
           
           resolve(filtrarPrendas)

        })
        promesa.then(result => {
            
            setPrendas(result)

        })

    }, [idProducto])

    return(
        <div className="itemDetail col d-flex flex-row justify-content-evenly mt-5 mb-5">
            <img src={prendas.img} alt={prendas.title} />
            <div className="info d-flex flex-column align-items-center justify-content-center gap-5">
                <h2>{prendas.title}</h2>
                <p className="w-50 text-center">{prendas.descripcion}</p>
                <p>$ {prendas.price}</p>
                <ItemCount/>
                <button type="button" class="btn-agregar btn btn-dark ">Agregar al carrito</button>
            </div>
            
        </div>    
    )
    

   
}



export default ItemDetailContainer