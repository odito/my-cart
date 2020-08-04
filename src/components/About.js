import React from 'react';
import {Link} from 'react-router-dom';
import aboutImg from '../img/about.jpg';

export default function About() {
    return (
        <div className='about'>
           <div className="inside-container">
               <div className="about-center">
                   <div className="about-img">
                       <img src={aboutImg} alt=""/>
                   </div>

                   <div className="about-info">
                       <p>the shoes addict is an online ecommerce store which provides the most famous shoes from the most well-known companies like nike, adidas, puma, new balance, lacoste,. It is the best store which provides the best prices directly from companies.</p>

                       <div className="btn-options">
                       <Link to="/products"><button className="back-products">back to products</button></Link>
                       </div>
                   </div>
               </div>
            </div> 
        </div>
    )
}
