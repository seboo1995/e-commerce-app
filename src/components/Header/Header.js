import React,{useState} from "react";
import "./Header.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPersonFill,BsFillCartFill } from "react-icons/bs";
import { MenuPop } from "../MenuPop/MenuPop";
export const Header = () => {
    const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = (e) => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  
  return (
    <div>
      <div className="header flex-container">
        <div className="logo">
          <h4> DUROTAN </h4>
        </div>
        <div className="menu-items" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <p> Home </p>
          {isHovering && <MenuPop menu_item='home-items' />}
        </div>
        <div className="menu-items" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <p> Shop </p>
          {isHovering && <MenuPop menu_item='shop-items' />}
        </div>
        <div className="menu-items" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <p> Product </p>
        </div>
        <div className="menu-items" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <p> blog </p>
        </div>
        <div className="icons">
          <div>
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
