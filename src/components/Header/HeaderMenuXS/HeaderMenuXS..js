import { NavLink } from "react-router-dom";
import styles from "./HeaderMenuXS.module.scss";
import logo from "../../../assets/images/Sony_Computer_Entertainment_logo.jpg";

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

      <img src={logo} alt="Logo sony computer" />
    </ul>
  );
}

export default HeaderShowMenuXS;
