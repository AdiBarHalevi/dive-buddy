import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyle, IconStyle, LiStyle, UlStyle } from "./HeaderStyle";

const NavBar = () => {
  return (
    <HeaderStyle>
      <UlStyle>
        <LiStyle>
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            <IconStyle>HOME</IconStyle>{" "}
          </Link>
        </LiStyle>
        <LiStyle>
          <Link to="/movies" style={{ textDecoration: "none" }}>
            <IconStyle>Login</IconStyle>
          </Link>
        </LiStyle>
      </UlStyle>
    </HeaderStyle>
  );
};

export default NavBar;
