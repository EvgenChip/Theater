import React from "react";

import logoMt from "../../assets/Logo/logoMT.svg";
import borderTitle from "../../assets/borderTitle.png";
import "./styles.css";

export const Header = () => (
  <header className="header">
    <img className="header__logo" src={logoMt} alt="" />
    <img className="header__title" src={borderTitle} alt="" />
  </header>
);
