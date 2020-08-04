import React from 'react';
import {ProductConsumer} from './Context';
import Cart from './Cart';
import logo from '../img/logo.png';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
<ProductConsumer>
    {(value)=>{
        const {cart,handleNav,handleCartNav,navOpen,closeNavCart}=value
    return(
        <div className="container sticky">
          <nav className="sticky">
            <div className="logo-btn">
              <Link to="/" onClick={closeNavCart}><img src={logo} alt="logo"/><span className='shoes'>shoes</span>addict</Link>

              <div className="cart hide" onClick={handleCartNav}><i className="fas fa-shopping-cart"></i><span>0</span></div>

              <div className="btn" onClick={handleNav}>
                  <i className="fas fa-bars"></i>
              </div>

            </div>

            <div className="dra">
                <div className="drawers">
                    <ul className={navOpen?" newLinks links":"links"} onClick={closeNavCart}>
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/about" >About</Link></li>
                        <li><Link to="/products" >Products</Link></li>
                    </ul>

                    <Cart valueProps={value} />
                </div>

    <span className="carta" onClick={handleCartNav}>Cart<i className="fas fa-shopping-cart cart"><span>{cart.length}</span></i></span>
            </div>
          </nav>
        </div>
    )
    }}
</ProductConsumer>
    )
}
