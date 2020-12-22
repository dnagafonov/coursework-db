import React from "react";
import HeaderNav from "./-nav/header-nav";
import SocialLinks from "../common/social-links/social-links";
import Wrapper from "../common/wrapper/wrapper";

import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header media1220">
    <Wrapper>
      <SocialLinks />
      <Link to="/account">Account</Link>
      <HeaderNav />
    </Wrapper>
  </header>
);

export default Header;
