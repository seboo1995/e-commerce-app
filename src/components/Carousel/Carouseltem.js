import React from "react";
import { ShopNowButton } from "../buttons/ShopNowButton";
import img from './img.png'
import { FiPlayCircle } from "react-icons/fi";


export const Carouseltem = (props) => {
  const style = { color: "black", width: "3.5em", size:'60'  }
  return (

    <div className="flex-carousel-container">
      <div className="count-carousel-item">
        1 <br /> -- <br /> 3
        <div className="prev-next-buttons">
        <p className='prev-button'> Prev</p> |  <p className="next-button"> Next </p>
        </div>
      </div>
      <div className='carousel-text'>
        <h4> NEW ARRIVAL </h4>
        <h1> Basic Colours Comeback</h1>
        <p className='carousel-text-description'> Less is more never out of date bla bla bla </p>
        <div className='carousel-shop-button'>
        <ShopNowButton />
        <div className="play-button">
        <FiPlayCircle style={ {'color': "black", 'width': "3.5em", 'size':'60' } } size={60} />
        </div>
        <p className='carousel-lookbook'>View Lookbook</p>
        </div>
         </div>
         <div className="carousel-picture"> 
          <img src={img}/>
         </div>
    </div>
  );
};
