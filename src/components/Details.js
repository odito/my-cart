import React, { Component } from 'react';

import {ProductConsumer} from './Context' ;
import {Link} from 'react-router-dom';




export default class Details extends Component {
    render(props) {
        return (
<ProductConsumer>
    {value=>{
    
    const{data, addToCart}=value;
    console.log(this.props.match.params.id);

     let results=data.find(data=>data.id===parseInt(this.props.match.params.id));





    return(
        <div className="det">
          <div className="inside-container">
              <h2>Product details</h2>
              <div className="det-center">
                  <div className="det-img">
                      <img src={`/${results.img}`} alt="img"/>
                  </div>

                  <div className="det-info">
    <h3>{ results.title}</h3>
    <p>{results.details}</p>
    <h4>price: <span>${results.price}</span></h4>

     <div className="but-options">
      <Link to="/products"><button className="back-products">Back to products</button></Link>
      <button className="add-toCart" onClick={()=>addToCart(results.id)}>Add to cart</button>
     </div>
                  </div>
              </div>
          </div>


        </div>
    )
}}
</ProductConsumer>
        )
    }
}
