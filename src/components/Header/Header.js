import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import HeaderShowMenuXS from "./HeaderMenuXS/HeaderMenuXS.";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function handleClickShowMenu() {
    console.log("avant", showMenu);
    setShowMenu(!showMenu);
  }

  return (
    <header className={`d-flex justify-between align-center ${styles.header}`}>
      <span className="ml-20">
        <Link className={styles.navBrand} to="/">
          Sony Gaming Fans
        </Link>
      </span>
      <ul className="d-flex justify-center align-center">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.ancre} link-active` : ""
            }
            to="/story"
          >
            Story
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.ancre} link-active` : ""
            }
            to="/games"
          >
            Games
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.ancre} link-active` : ""
            }
            to="/emulation"
          >
            Emulation
          </NavLink>
        </li>
      </ul>
      <i
        onClick={handleClickShowMenu}
        className={`fa-solid ${showMenu ? "fa-xmark" : "fa-bars"} mr-20 ${
          styles.headerXS
        }`}
      ></i>
      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className="calc"></div>
          <HeaderShowMenuXS />
        </>
      )}
    </header>
  );
}

export default Header;
