import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { doc, getDoc, getFirestore } from "firebase/firestore"


const ItemDetailContainer = () => {
    
   
    
    const [prendas,setPrendas] = useState([])
    const [error, setError] = useState('');
    
    const {idProducto}=useParams()
    
    useEffect(() => {
    
        const db = getFirestore()
        const docRef = doc(db , "prendas" , idProducto)
        getDoc(docRef)
          .then((resp)=>{
             if (resp.exists()) {
                setPrendas({ ...resp.data(), id: resp.id })
  
            } else {
                    setError('El producto no existe.');
            }
          })
         }, [idProducto])


        if (error) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center mt-5">
                        <i class='bx bxs-x-circle'></i>
                        <h1 className="mt-5">{error}</h1>
                        <Link className="mt-5" to="/">Volver al Home</Link>
                    </div>
                </div>

            </div>
        ) ;
        }

    return(
        
        <ItemDetail prendas={prendas}/>

    )
    

   
}



export default ItemDetailContainer