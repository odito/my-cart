import React from 'react';
import {ProductConsumer} from './Context';
import Product from './Product';

export default function Products() {
    return (
       <ProductConsumer>
    {function(value){
        const{data,closeNavCart, addToCart}= value;
        return(
    <div className="products">
      <h2>Products</h2>
      <div className="products-center">
          {data.map(data=>{
              return <Product key={data.id} data={data}  closeNavCart={closeNavCart} addToCart={()=>addToCart(data.id)}  />
          })}
        </div>  
    </div>

    )
    }}
       </ProductConsumer>
    )
}
