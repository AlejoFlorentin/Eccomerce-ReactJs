const Carousel = () =>{

    return(
   <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src="https://acdn.mitiendanube.com/stores/002/237/525/themes/new_linkedman/2-slide-1716350540827-2150682188-9c201824f54513f1489a6707cc5da55e1716350543-1920-1920.webp?1467407462" className="d-block w-100 carousel-img" alt="..."/>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="https://vcp.com.ar/cdn/shop/files/ahora_aa1dcea7-2945-4ee1-a5ce-3de4050f575a.jpg?v=1712154135&width=2000" className="d-block w-100 carousel-img" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="https://freres.ar/wp-content/uploads/2024/05/SignificaHermanos_Slider-Lanzamiento-Desktop-1-1024x576.png" className="d-block w-100 carousel-img" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
)

}

export default Carousel