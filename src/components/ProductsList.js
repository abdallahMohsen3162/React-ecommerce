import Card from "./Card";
import { useEffect, useState } from "react";




const ProductList = () => {
    const[products, setData] = useState(0);
    

    const loadApi = async () => {
        let url = 'https://fakestoreapi.com/products';
        let d = await fetch(url);
        let Data = await d.json();
        setData(Data);
        return;
    }

    useEffect(()=>{
        loadApi();
    },[])

    return(

    <div className="container-fluid bg-dark">
        <div className="container bg-dark">
        <div className="row gy-4">

            {
                products?(
                    products.map((el)=>{
                        console.log("dd");
                        return (<Card product={el}/>)
                    })
                ):(
                    <div class="alert alert-info" role="alert">
                        Some ERROR occured
                    </div>
                )
                
            }
            
            {/* <Card product={products[0]}/> */}

        </div>
        </div>
    </div>
    )
}

export default ProductList;