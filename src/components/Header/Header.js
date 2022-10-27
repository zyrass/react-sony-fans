import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={`d-flex justify-between align-center ${styles.header}`}>
      <span className="ml-20">
        <Link
          className={styles.navBrand}
          to="/"
        >
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
    </header>
  );
}

export default Header;
