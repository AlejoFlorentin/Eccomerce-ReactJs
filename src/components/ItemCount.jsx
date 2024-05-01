import { useState } from "react"

const ItemCount = () => {
    const [contador,setContador]=useState(0)

    const incrementar = () => {
        setContador(contador + 1)
    }

    const decrementar = () => {
        setContador(contador - 1)
    }

    return(
        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div div class="btn-group me-2" role="group" aria-label="First group">
                <button type="button" onClick={incrementar} class="btn btn-dark">+</button>
                <button type="button" class=" btn ">{contador}</button>
                <button type="button" onClick={decrementar} class="btn btn-dark">-</button>
            </div>
        </div>    
    )
}

export default ItemCount
