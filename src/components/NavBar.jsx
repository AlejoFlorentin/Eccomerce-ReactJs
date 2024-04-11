import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
      <>
      <nav className="navbar navbar-expand-lg bg-dark h-100">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#"><h1>Superlative</h1></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-ligth ms-5 " id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Quienes somos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Contacto</a>
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