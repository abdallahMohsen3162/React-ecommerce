import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import load from "./images/loading.gif";


const Prodict = () => {
    const [prod, setProd] = useState();
    useEffect(()=>{
        loadApi();
    },[]);
    let parameters = useParams();
    const loadApi = async () => {
        let url = "https://fakestoreapi.com/products";
        let d = await fetch(`${url}/${parameters.productId}`);
        let Data = await d.json();
        setProd(Data);
        return;
    }
    
    
    if(!prod){
        return(

            <div className="load">
                <img src={load} className="m-5" />
            </div>

        )
    }
    

    return(

        <div className="bg-dark text-light">
            <img src={prod.image} alt="" />
            <h1 className="display-1">
            {prod.title}
            </h1>
            <p className="text-secondary">
                {prod.description}
            </p>

            <h1>
                {prod.price}$
            </h1>
        </div>
    )
}

export default Prodict;

/*
{
    "id": 10,
    "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    "price": 109,
    "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    "rating": {
        "rate": 2.9,
        "count": 470
    }
}

*/