import { useEffect, useState } from "react"
import {Link, useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { collection, getFirestore, getDocs, query, where } from "firebase/firestore"
import Carousel from "./Carousel"



const ItemListContainer = () => {

   
    
    const [prendas,setPrendas] = useState([])

    const {idCategoria}=useParams()
    
    

    useEffect(() => {

        const db = getFirestore()
        const itemsCollection=collection(db,"prendas")
        const q = idCategoria ? query(itemsCollection, where("category" , "==" , idCategoria)) : itemsCollection

        getDocs(q).then(resp => {
           
            setPrendas(
                resp.docs.map((item) => {
                   return {id:item.id, ...item.data()}
                  })
                )
        })
        

    }, [idCategoria])

    return(
        <main>
            {idCategoria ? <div className="mt-5 ms-5" aria-label="breadcrumb">
                <ol class="breadcrumb">
                <li class="breadcrumb-item "><Link className="text-decoration-none" to="/">Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page">{idCategoria}</li>
                </ol>
            </div> : ""}
            {idCategoria ? "" : <Carousel />}
                <div className="container">
                    <div className="row  " >
                        <ItemList prendas={prendas}/>
                    </div>
                </div>
        </main>
       
    )
    
}

export default ItemListContainer