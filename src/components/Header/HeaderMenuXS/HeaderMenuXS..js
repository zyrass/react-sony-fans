import { NavLink } from "react-router-dom";
import styles from "./HeaderMenuXS.module.scss";

function HeaderShowMenuXS() {
  return (
    <ul className={`${styles.menuXS}`}>
      <NavLink to="/story">
        <li>
          <span>Story</span>
          <i className="fa-solid fa-joystick"></i>
        </li>
      </NavLink>
      <NavLink to="/games">
        <li>
          <span>Games</span>
          <i className="fa-solid fa-gamepad-modern"></i>
        </li>
      </NavLink>
      <NavLink to="/emulation">
        <li>
          <span>Emulation</span>
          <i className="fa-light fa-gamepad-modern"></i>
        </li>
      </NavLink>
    </ul>
  );
}

export default HeaderShowMenuXS;
