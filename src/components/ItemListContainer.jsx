import { useEffect, useState } from "react"
import productos from '../data/Productos.json'
import { Link, useParams } from "react-router-dom"


const ItemListContainer = () => {

   
    
    const [prendas,setPrendas] = useState([])

    const {idCategoria}=useParams()
    
    

    useEffect(() => {

        const promesa = new Promise((resolve, reject) => {

           const filtrarPrendas= idCategoria ? productos.filter(item => item.category === idCategoria) : productos
           resolve(filtrarPrendas)
           

        })
        promesa.then(result => {
            setPrendas(result)
        })

    }, [idCategoria])
    

    

    return(
        <div className="container">
            <div className="row  " >
                
                {prendas.map(items => (
                <div key={items.id} className=" col-md-3">
                    
                    <Link className="text-decoration-none" to={"/productos/"+items.id}>

                    <div  className="card border-white mt-5 mb-5" >
                        <img src={items.img} className="card-img-top " alt={items.title}/>
                        <div className="card-body d-flex flex-column align-items-center ">
                            <h5 className="card-title">{items.title}</h5>
                            <p className="card-text"><b>$ {items.price}</b></p>
                        </div>
                    </div>
                    
                    </Link>
                    

                    
                    
                    
                </div>))} 
            </div>
        </div>

    )
    
}

export default ItemListContainer