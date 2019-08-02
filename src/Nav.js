import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "./UserContext";

function Nav() {
  const { user, logout } = useContext(UserContext);
  const activeStyle = { color: "orange" };

  return (
    <nav>
      {user && (
        <>
          Welcome {user.name}! <button onClick={logout}>Logout</button>
        </>
      )}
      <NavLink activeStyle={activeStyle} to="/" exact>
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink activeStyle={activeStyle} to="/courses">
        Courses
      </NavLink>
    </nav>
  );
}

export default Nav;
