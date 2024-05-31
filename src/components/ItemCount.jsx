import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock , onAdd}) => {

    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [visible, setVisible] = useState(true);

    const incrementar = () => {
        if (contador < itemStock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    const agregarAlCarrito = () => {
        if (contador <= itemStock) {
            setItemStock(itemStock - contador);
            onAdd(contador);
            setContador(1);
            setVisible(false);
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock])

    
    return(
        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div  className="btn-group me-2" role="group" aria-label="First group">
                <button type="button" onClick={incrementar} className="btn btn-dark">+</button>
                <button type="button" className=" btn ">{contador}</button>
                <button type="button" onClick={decrementar} className="btn btn-dark">-</button>
            </div>
            {visible ? <button type="button" className="btn-agregar btn btn-dark " onClick={agregarAlCarrito}>Agregar al carrito</button> 
            : <Link to="/carrito"><button type="button" className="btn-agregar btn btn-dark " >Finalizar Compra</button></Link>}
        </div>    
    )
}

export default ItemCount
