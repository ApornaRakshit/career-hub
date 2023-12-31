import React, { useEffect, useState } from "react";
import Product from "./Product"

const Shop = () => {
    const[features, setFeatures]= useState([]);     
const [cart,setCart] = useState([])
useEffect( () =>{
 fetch('features.json')
 .then(res=>res.json())
 .then(data=>setFeatures(data))
} ,[])
const handleAddToCart = (product) =>{
   const newCart = [...cart, product]
   setCart(newCart)
}
    return (
        <div className="shop-container grid grid-cols-2  mx-auto font-small">
             <div className="products-container gap-45">
                {
                    features.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
             </div>
             <div className="cart-container text-center w-100">
                
    
             </div>
        </div>
    )
}

export default Shop 