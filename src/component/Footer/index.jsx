import React from "react";

import Gazprom from "../../assets/Logo/Gazprom.svg";

import "./styles.css";

export const Footer = () => (
  <div className="footer">
    <div className="footer__logo">
      <span>при поддержке</span>
      <img src={Gazprom} alt="" />
    </div>
  </div>
);
