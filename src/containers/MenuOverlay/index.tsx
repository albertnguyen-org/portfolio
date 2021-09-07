import React from "react";
import "./style.css";
import menu_data from "../../data/menu.json";
import { MenuDataType } from "../../utils/types/menu.type";
import { Link } from "react-router-dom";
interface Props {
  display: boolean;
}

function MenuItemList(item: MenuDataType) {
  return (
    <div key={item.id} className="container-menu-item-list">
      <Link to={item.path}>
        <p className="txt-title">{item.title}</p>
      </Link>
    </div>
  );
};

function ListMenu() {
  return (
    <div className="container-list-menu">
      {menu_data.map(i => {
        return MenuItemList(i);
      })}
    </div>
  );
};

function MenuOverlay(props: Props) {
  return (
    props.display ? <div className="container-menu-overlay">
      <ListMenu />
    </div> : null
  );
}

export default MenuOverlay;
