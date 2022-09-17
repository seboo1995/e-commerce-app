import React from "react";

export const MenuPop = (props) => {
  const all_items = {
    "home-items": {
      columns: ["styles", "topic", "brands"],
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
    'shop-items':{
        columns: ["styles", "topic", "brands"],
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
  console.log(props)
  return (
    <div>
        {target_obj.columns.map(item => {
            return (<div className='flex-container'> 
                {item}
                </div>)
        })}
        




    </div>
  );
};
