import { useState } from "react";
import { NavLink } from "react-router-dom";
function Menu() {
  const [prevActive, setActive] = useState(null);
  function toggleActive(e) {
    prevActive?.classList.remove("menu__item-active");
    setActive(null);
    e.target.classList.add("menu__item-active");
    setActive(e.target);
  }
  return (
    <nav className="menu">
      <NavLink className={({isActive}) => "menu__item" + (isActive ? " menu__item-active" : "")} to="/" onClick={toggleActive}>
        Главная
      </NavLink>

      <NavLink className={({isActive}) => "menu__item" + (isActive ? " menu__item-active" : "")} to="/drift" onClick={toggleActive}>
        Дрифт-такси
      </NavLink>

      <NavLink className={({isActive}) => "menu__item" + (isActive ? " menu__item-active" : "")} to="/timeattack" onClick={toggleActive}>
        Time Attack
      </NavLink>

      <NavLink className={({isActive}) => "menu__item" + (isActive ? " menu__item-active" : "")} to="/forza" onClick={toggleActive}>
        Forza Karting
      </NavLink>
    </nav>
  );
}

export default Menu;
