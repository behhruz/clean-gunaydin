import React from "react";
import "./main.css";
import leftImg from "../../assets/logo/left.png";
import rightImg from "../../assets/logo/right.png";
import { useTranslation } from "react-i18next";
import xolaImg from "../../assets/img/image 4.png";

export const Main = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="main">
      <section className="first_section">
        <img src={leftImg} alt="" />
        <div className="first_section_child">
          <div className="first_section_child_left">
            <h1>{t("main.zagalovok")}</h1>
            <p>{t("main.podzagalovok")}</p>
            <button>{t("main.first-button")}</button>
          </div>
          <div className="first_section_child_right">
            <img src={xolaImg} alt="" />
            <div className="shadow">h</div>
          </div>
        </div>
        <img src={rightImg} alt="" />
      </section>
    </div>
  );
};
export default Main;
