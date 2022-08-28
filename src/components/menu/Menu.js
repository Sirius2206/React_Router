import { useState } from "react";
import { Link } from "react-router-dom";
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
      <Link className="menu__item" to="/" onClick={toggleActive}>
        Главная
      </Link>

      <Link className="menu__item" to="/drift" onClick={toggleActive}>
        Дрифт-такси
      </Link>

      <Link className="menu__item" to="/timeattack" onClick={toggleActive}>
        Time Attack
      </Link>

      <Link className="menu__item" to="/forza" onClick={toggleActive}>
        Forza Karting
      </Link>
    </nav>
  );
}

export default Menu;
