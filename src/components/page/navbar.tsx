import React from "react";

import { NavbarComponent } from "./styles";
import Image from "../../assets/images/navbar-logo.png";

const Navbar: React.FC = () => {
  return (
    <NavbarComponent>
      <a href="/">
        <img src={Image} />
      </a>
    </NavbarComponent>
  );
};

export default Navbar;
