import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from './Context';

export default class Product extends Component {

render(props) {

const {id, img,title,price,isInCart}=this.props.data;
const {closeNavCart,addToCart} = this.props;


return (
<ProductConsumer>
{value=>{
    return(
<div className="product">
    <Link to={`/details/${id}`} onClick={closeNavCart} >
        <div className="img-div">
            <img src={img} alt=""/>

        </div>
    </Link>

    <div className="details">
    <h3>{title}</h3>
    <p>${price}</p>

    <div className="cartBtn">
        <button onClick={addToCart} className={isInCart ?'disabled':''}> <i className="fas fa-shopping-cart"></i>{isInCart?"Already in cart":"Add to cart"} </button>
    </div>
    </div>
 </div>


    )
}}
</ProductConsumer>
)
}
}
