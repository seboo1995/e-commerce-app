import React from "react";
import './menu-pop.css'

export const MenuPop = (props) => {

  //this should be in database maybe
  const all_items = {
    "home-items": {
      columns: ["styles-home", "topic-home", "brands-home"],
      column_1: ["default", "full-width", "modern", "collections", "Dark Skin"],
      column_2: [
        "furniture1",
        "furniture2",
        "decoration",
        "cosmetic",
        "jewlerry",
      ],
      column_3: ["brandname", "slothing", "masore", "gap"],
    },
    'shop-items': {
      columns: ["styles-shop", "topic-shop", "brands-shop"],
      column_1: ["default", "full-width", "modern", "collections", "Dark Skin"],
      column_2: [
        "furniture1",
        "furniture2",
        "decoration",
        "cosmetic",
        "jewlerry",
      ],
      column_3: ["brandname", "slothing", "masore", "gap"],

    },
    'product-items': {
      columns: ["styles-product", "topic-product", "brands-product"],
      column_1: ["default", "full-width", "modern", "collections", "Dark Skin"],
      column_2: [
        "furniture1",
        "furniture2",
        "decoration",
        "cosmetic",
        "jewlerry",
      ],
      column_3: ["brandname", "slothing", "masore", "gap"],

    }
  };
  const target_obj = all_items[props.menu_item]
  console.log(target_obj)
  return (

    <div className="menu-popup-container">
      {target_obj.columns.map(item => {
        return (<div className='popup-container'>
          <div className="item-container">

            <p> {item}</p>
          </div>

        </div>)
      })}

    </div>

  );
};
