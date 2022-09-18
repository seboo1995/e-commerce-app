import React,{useState} from "react";
import "./Header.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPersonFill,BsFillCartFill } from "react-icons/bs";
import { MenuPop } from "../MenuPop/MenuPop";
export const Header = () => {
    const [isHovering, setIsHovering] = useState({
        'Home':false,
        'Shop':false,
        'Product':false,
        'Blog':false
    });
  const handleMouseOver = (e) => {
    const k = e.target.firstChild.textContent.trim()
    const new_obj = {...isHovering}
    new_obj[k]= true
    setIsHovering(new_obj);
  };

  const handleMouseOut = (e) => {
    const k = e.target.firstChild.textContent.trim()
    const new_obj = {...isHovering}
    const temp = Object.keys(new_obj).forEach(function(key, index) {
        new_obj[key] = false;
      });
    setIsHovering(new_obj);
  };
  const handelMouseOutOfPopUp = (e) => {
    const new_obj = {...isHovering}
    const temp = Object.keys(new_obj).forEach(function(key, index) {
        new_obj[key] = false;
      });
      console.log('Outside of the pop-up')
    setIsHovering(new_obj);
   
}

  return (
    <div>
      <div className="header flex-container">
        <div className="logo">
          <h4> DUROTAN </h4>
        </div>
        


        <div className="menu-items" onMouseOut={handelMouseOutOfPopUp} onMouseOver={handleMouseOver}>
          <p > Home </p>
          {isHovering['Home'] && <MenuPop menu_item='home-items'/>}
        </div>
        <div className="menu-items" onMouseOut={handelMouseOutOfPopUp} onMouseOver={handleMouseOver}>
          <p> Shop </p>
          {isHovering['Shop'] && <MenuPop menu_item='shop-items' onMouseOut={handelMouseOutOfPopUp}/>}
        </div>
        <div className="menu-items" onMouseOut={handelMouseOutOfPopUp} onMouseOver={handleMouseOver} >
          <p> Product </p>
          {isHovering['Product'] && <MenuPop menu_item='product-items' onMouseOut={handelMouseOutOfPopUp}/>}
        </div>
        <div className="menu-items" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
          <p > blog </p>
          {isHovering['Blog'] && <MenuPop menu_item='shop-items' onMouseOut={handelMouseOutOfPopUp}/>}
        </div>
        <div className="icons">
          <div className='search'>
            <AiOutlineSearch size={30} />
          </div>
          <div>
            <BsPersonFill size={30} />
          </div>
          <div>
          <BsFillCartFill size={30}/>
          </div>
        </div>
      </div>
      <hr className="line" />
    </div>
  );
};
