import { Link } from "react-router-dom"

const Error404 = () =>{

    return(
        <div className="container">
            <div className="row">
                <div className="col text-center mt-5">
                    <i class='bx bxs-x-circle text-danger fs-1'></i>
                    <h1>Error 404</h1>
                    <Link to="Productos">Volver a Home</Link>
                </div>
            </div>
        </div>
    )
}

export default Error404