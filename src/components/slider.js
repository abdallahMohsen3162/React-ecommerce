import s1 from "./images/slider1.avif";
import s2 from "./images/slider2.png";
import s3 from "./images/slider3.jpg";




const Slider =()=> {
    

    return(
        <>
        <div id="carouselExample" className="carousel slide">

            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={s1} className="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                <img src={s2} className="d-block w-100" alt="..." />
                </div>
                
                <div className="carousel-item">
                <img src={s3} className="d-block w-100" alt="..." />
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </>
    )

}

export default Slider;