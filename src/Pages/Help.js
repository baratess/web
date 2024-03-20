import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Help() {
  return (
    <div className="help-layout">
      <h2>Help Page</h2>
      <p> Welcome To Help Page </p>

      <nav>
        <NavLink to="faq">View The FAQ</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default Help;
