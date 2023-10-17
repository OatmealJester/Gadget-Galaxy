import React from 'react';
import { MenuList } from '../utils/MenuList';
import MenuItem from '../Components/Products/MenuItem';
import '../styles/Accessories.css';

function Laptops() {
  return (
    <div className="LaptopContainer">
      <h1 className="menuTitle">Accessories</h1>

      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              price={menuItem.price}
              name={menuItem.name}
              detail={menuItem.detail}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Laptops;
