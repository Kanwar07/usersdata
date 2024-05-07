import React from "react";
import navbarstyle from "./NavBar.module.css";
import { NavLink, Outlet } from "react-router-dom";
import group from "../../assets/group.png";

function NavBar() {
  return (
    <>
      <div className={navbarstyle.main}>
        <NavLink to="/">
          <img
            src={group}
            alt="group"
            style={{ height: "40px", width: "40px" }}
          />
        </NavLink>
        <div className={navbarstyle.innerdiv}>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <div className={navbarstyle.button}>Home</div>
          </NavLink>
          <NavLink to="/users" style={{ textDecoration: "none" }}>
            <div className={navbarstyle.button}>Users</div>
          </NavLink>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default NavBar;
