import {  useContext } from "react"
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext"



const ItemDetail = ({prendas}) =>{

    

    const {agregar} = useContext(CartContext);

    const onAdd = (cantidad) => {
        agregar(prendas, cantidad);
    }

    

    return(

        <div className="itemDetail col d-flex flex-row justify-content-evenly mt-5 mb-5">

            <img src={prendas.img} alt={prendas.title} />
            <div className="info d-flex flex-column align-items-center justify-content-center gap-5">
                <h2>{prendas.title}</h2>
                <p className="w-50 text-center">{prendas.descripcion}</p>
                <p>$ {prendas.price}</p>
                <ItemCount stock={prendas.stock} onAdd={onAdd}/>
            </div>
            
        </div>    

    )

}

export default ItemDetail