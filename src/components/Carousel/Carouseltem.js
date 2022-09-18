import React from "react";
import { ShopNowButton } from "../buttons/ShopNowButton";
import img from './img.png'
export const Carouseltem = (props) => {
  return (
    <div className="flex-carousel-container">
      <div className="count-carousel-item">
        1 <br /> -- <br /> 3
      </div>
      <div className='carousel-text'>
        <h4> NEW ARRIVAL </h4>
        <h1> Badic Colours Comeback</h1>
        <p className='carousel-text-description'> Less is more never out of date bla bla bla </p>
        <div className='carousel-shop-button'>
        <ShopNowButton />
        </div>
         </div>
         <div className="carousel-picture"> 
          <img src={img}/>
         </div>
    </div>
  );
};
