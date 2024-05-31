import { Link } from "react-router-dom"

const Item = ({item}) => {

    return (

        <div className="col-md-3">
                    
            <Link className="text-decoration-none" to={"/productos/"+ item.id}>

                <div  className="card border-white mt-5 mb-5 bg-secondary-subtle" >
                    <img src={item.img} className="card-img-top " alt={item.title}/>
                    <div className="card-body d-flex flex-column align-items-center ">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">$ {item.price}</p>
                    </div>
                </div>
                    
            </Link>
                    
        </div>

    )
    
}

export default Item