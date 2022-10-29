import { NavLink, Outlet } from "react-router-dom";
import styles from "./Emulation.module.scss";

function EmulationPage() {
  return (
    <div className="card">
      <h1>Emulation</h1>
      <p className="text-lead">
        source:
        <a href="http://emu-france.com" target="_blank" rel="noreferrer">
          http://emu-france.com
        </a>
      </p>

      <hr className="my-20" />

      <nav>
        <ul className="nav_subPage">
          <NavLink
            className={({ isActive }) => (isActive ? `${styles.active}` : "")}
            to="psx"
          >
            <li className="d-flex flex-row justify-between">
              <i class="fa-brands fa-playstation"></i>
              PSX
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? `${styles.active}` : "")}
            to="ps2"
          >
            <li className="d-flex flex-row justify-between">
              <i class="fa-brands fa-playstation"></i>
              PS2
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? `${styles.active}` : "")}
            to="ps3"
          >
            <li className="d-flex flex-row justify-between">
              <i class="fa-brands fa-playstation"></i>
              PS3
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? `${styles.active}` : "")}
            to="ps4"
          >
            <li className="d-flex flex-row justify-between">
              <i class="fa-brands fa-playstation"></i>
              PS4
            </li>
          </NavLink>
        </ul>
      </nav>

      <article>
        <Outlet />
      </article>
    </div>
  );
}

export default EmulationPage;
