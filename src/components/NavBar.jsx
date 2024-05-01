import { Link, NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
    <>
      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid">
         <Link className="d-flex align-items-center text-decoration-none " to={"/"} >
          <img className="logo" src="/img/Logo/logo-2.svg" alt="" />
          <h1 className="navbar-brand text-white">Superlative</h1> 
         </Link> 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" 
                aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse text-ligth ms-5 " id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link text-white" activeclassname="active" to={'/'}  >Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" activeclassname="active" to={'/categoria/bermudas'} >Bermudas</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" activeclassname="active" to={'/categoria/remeras'} >Remeras</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" activeclassname="active" to={'/categoria/pantalones'} >Pantalones</NavLink>
            </li>
          </ul>
        </div>
        </div>
          <CartWidget/>
      </nav>

    </>
        
    )
}

export default NavBar