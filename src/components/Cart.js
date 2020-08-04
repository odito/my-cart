import React from 'react';
import {ProductConsumer} from './Context';
import {Link} from 'react-router-dom';

export default function Cart(props) {
    const {cartOpen,closeNavCart, handleCartNav, shipping}=props.valueProps;
    return (
<ProductConsumer>
{value=>{
    const {cart,total,deleteItem,increaseItem, decreaseItem}=value;
    return(
        <ul className={cartOpen?'newCartNav cartNav cartItem':'cartNav cartItem'}>

         {cart.length===0 ?
         
           <div>
               <span className="inside-btn" onClick={handleCartNav}>X</span>
               <div className='empty'>
                  cart is currently empty
               </div>
           </div>:

<div className="cartItem">
<span className="inside-btn" onClick={handleCartNav}>X</span>

{cart.map(product=>{
    return(

     <div className="cart-center" key={product.id}>
       <div className="img-cart">
           <img src={product.img} src={`/${product.img}`} alt="img"/>
       </div>

       <div className="item-cart">
    <p>{product.title}</p>
       </div>

       <div className="inc-dec-cart">
           <button onClick={()=>decreaseItem(product.id)}>-</button>
           {product.count}
           <button onClick={()=>increaseItem(product.id)}>+</button>
       </div>

       <div className="price-cart">
    <p>$ {product.price*product.count}</p>
       </div>

       <div className="del-item" onClick={()=>deleteItem(product.id)}>
           <i className="fa fa-trash"></i>
       </div>
     </div>
    )
})}

{/* total */}
<div className="extra-info">
<h3><span>amount:</span>${total}</h3>

<div className="shipping">
<h3><span>shipping: </span>{total>90?'free':`+${shipping}`}</h3>
</div>
<h3><span>total amount :</span>${total>90 ?total:total +shipping}</h3>

<div className="payment" onClick={closeNavCart}><Link to='/payment'>Payment</Link></div>
</div>

</div> 


        }



          
        </ul>
    )
}}
</ProductConsumer>
)
}
