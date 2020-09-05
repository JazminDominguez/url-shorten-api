import React, { useState } from "react";
//import { Flex, Box } from "rebass";
//import PropTypes from 'prop-types'
import logo from "../assets/logo.svg";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const menuSwitch = () => setMenu((menu) => !menu);

  const active = menu ? "active" : "";

  return (
    <nav>
      <ul className="menu">
        <li className="logo-container left-options">
          <img src={logo} alt="shortly logo" />
        </li>
        <li className={`item item--${active} first-item left-options`}>
          <a href="#">Features</a>
        </li>
        <li className={`item item--${active} left-options`}>
          <a href="#">Pricing</a>
        </li>
        <li className={`item item--${active} division`}>
          <a href="#">Resources</a>
        </li>
        <li className={`item item--${active} login right-options`}>
          <a href="#">Login</a>
        </li>
        <li className={`item item--${active} sign-up-button `}>
          <a href="#">Sign Up</a>
        </li>
        <li className="toggle" onClick={menuSwitch}>
          <span className="bars"></span>
        </li>
      </ul>
    </nav>
  );
};

/*Header.propTypes = {
    
}
*/
export default Header;
