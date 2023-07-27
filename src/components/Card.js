import Star from "./Star";
import {Link} from "react-router-dom";

const Card =({product}) => {
    // console.log(Rate);
    return(
        <>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12" key={product.id}>
                <div className="card overflow-hidden">

                <span className="disc-hidden">
                <p className="card-text"></p>
                </span>
                    <div>
                    <img src={product.image} className="Product card-img-top" alt="..." />
                    </div>
                    
                    <div className="Card-body card-body">
                        <p className="description">{product.description}</p>
                        <h6 className="">{product.title}</h6>
                        <h5 className="price">{product.price} $ </h5>
                        <h4>{product.rating.rate} <Star /> </h4>

                        <Link to={`/product/${product.id}`} className="btn btn-outline-secondary">Add to card</Link>
                    </div>
                
                    

                
                </div>
            </div>

        </>
    )
}

export default Card;