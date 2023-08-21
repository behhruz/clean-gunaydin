import React from "react";
import "./main.css";
import leftImg from "../../assets/logo/left.png";
import rightImg from "../../assets/logo/right.png";
import { useTranslation } from "react-i18next";
import xolaImg from "../../assets/img/image 4.png";
import sharLogo from "../../assets/logo/shar.png";
import photo1 from "../../assets/img/photo1.png";
import photo2 from "../../assets/img/photo2.png";
import photo3 from "../../assets/img/photo3.png";
import photo4 from "../../assets/img/photo4.png";
import likeKok from "../../assets/logo/Vector (20).png";

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
      <section className="second_section">
        <button type="">
          <a href="tel:+998333000057">{t("header.service")}</a>{" "}
        </button>
        <p className="second_section-first_text">
          {t("main.usluga-text-zagalovok")}
        </p>
        <div className="wrapper-cards">
          <img className="sharLogo" src={sharLogo} alt="" />
          <div className="box_cards">
            <p className="service2">SERVICE</p>
            <div className="real_box_card">
              <div className="wrapper-real-cards">
                {" "}
                <p className="second_section-second_text">
                  {t("main.usluga-text")}
                </p>
                {/* card */}
                <div className="boxes_cards">
                  <div className="cards-first">
                    <img src={photo1} alt="" />
                    <div className="text-logo_box">
                      <p>{t("main.card1")}</p>
                      <img src={likeKok} alt="" />
                    </div>
                  </div>
                  <div className="Wrapper_second">
                    <img src={photo2} alt="" />
                    <div>
                      <p className="second-card-p">{t("main.card2")}</p>
                      <p className="second-card-p2">{t("main.card2-text")}</p>
                    </div>
                  </div>

                  <div className="cards-first">
                    <img src={photo3} alt="" />
                    <div className="text-logo_box">
                      <p>{t("main.card1")}</p>
                      <img src={likeKok} alt="" />
                    </div>
                  </div>
                  <div className="cards-first">
                    <img src={photo4} alt="" />
                    <div className="text-logo_box">
                      <p>{t("main.card1")}</p>
                      <img src={likeKok} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="sharLogo1" src={sharLogo} alt="" />
        </div>
      </section>
    </div>
  );
};
export default Main;
