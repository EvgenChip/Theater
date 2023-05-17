import React from "react";

import QR from "../../assets/Logo/QR.svg";

import { Authors } from "../Authors";
import { Header } from "../Header";
import { Footer } from "../Footer";
import "./styles.css";

export const Main = () => (
  <div className="wrapper">
    <div className="main__container">
      <main className="main">
        <Header />
        <div className="main__title">Авторы малого театра</div>
        <div className="main__content">
          <div className="theater"></div>
          <Authors />
        </div>
        <img className="footer__QR" src={QR} alt="" />
        <Footer />
      </main>
    </div>
  </div>
);
