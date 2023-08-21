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
import thirdImage from "../../assets/img/image-removebg-preview (52).png";
import card1 from "../../assets/Card/1.png";
import card2 from "../../assets/Card/Rectangle 18.png";
import card3 from "../../assets/Card/Rectangle 22.png";
import card4 from "../../assets/Card/Rectangle 23 (1).png";
import card5 from "../../assets/Card/Rectangle 24.png";
import card6 from "../../assets/Card/Rectangle 28 (1).png";
import card7 from "../../assets/Card/Rectangle 29.png";
import card8 from "../../assets/Card/Rectangle 30.png";
import card9 from "../../assets/Card/Rectangle 31.png";
import card10 from "../../assets/Card/Rectangle 32.png";
import xolaRasmi from "../../assets/img/Rectangle 33.png";

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
      <div className="there_container_wrapper">
        <section className="third-section">
          <button className="s-third-button">
            {t("main.third-section_button")}
          </button>
          <div className="third-container-left">
            <img src={thirdImage} alt="" />
          </div>
          <div className="third-container-right">
            <button className="C-third-button">
              {t("main.third-section_button")}
            </button>
            <p className="third-container-right-text">
              {t("main.third-section_text")}
            </p>
            <div className="third-container-right_child">
              <button className="call_button">{t("main.first-button")}</button>
            </div>
          </div>
        </section>{" "}
        <section className="fourth_section">
          <div className="fourth_section-top">
            <button className="GreenButton">{t("main.fourButton")}</button>
          </div>
          <div className="fourth_section-bottom">
            <div className="fourth_section-bottom-left">
              <p className="fourth_section-first_text">
                {t("main.fourHeading")}
              </p>
              <p className="third-container-right-text">{t("main.fourText")}</p>
              <button className="call_button">{t("main.first-button")}</button>
            </div>
            <div className="fourth_section-bottom-right">
              <div className="fourth_section-bottom-right-top">
                <img src={card1} alt="" />
                <div className="four-carda">
                  <img className="rasm" src={card2} alt="" />
                  <img className="rasm" src={card2} alt="" />
                  <img className="rasm" src={card2} alt="" />
                  <img className="rasm" src={card2} alt="" />
                </div>
              </div>
              <div className="fourth_section-bottom-right-bottom">
                <img className="rasm1" src={card5} alt="" />
                <img className="rasm1" src={card5} alt="" />
                <img className="rasm1" src={card5} alt="" />
                <img className="rasm1" src={card5} alt="" />
                <img className="rasm1" src={card5} alt="" />
                <img className="rasm1" src={card5} alt="" />
                <img className="rasm1" src={card5} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="fifth_section">
          <button className="GreenButton1">{t("header.command")}</button>
          <div className="wrapper-fifth-cards">
            <div className="card-five">
              <img src={xolaRasmi} alt="" />
              <div className="card-five-texts">
                <p className="top-text">{t("main.fifth_card")}</p>
                <p className="bottom-text">{t("main.fifth_card1")}</p>
              </div>
            </div>
            <div className="card-five">
              <img src={xolaRasmi} alt="" />
              <div className="card-five-texts">
                <p className="top-text">{t("main.fifth_card")}</p>
                <p className="bottom-text">{t("main.fifth_card1")}</p>
              </div>
            </div>{" "}
            <div className="card-five">
              <img src={xolaRasmi} alt="" />
              <div className="card-five-texts">
                <p className="top-text">{t("main.fifth_card")}</p>
                <p className="bottom-text">{t("main.fifth_card1")}</p>
              </div>
            </div>{" "}
            <div className="card-five">
              <img src={xolaRasmi} alt="" />
              <div className="card-five-texts">
                <p className="top-text">{t("main.fifth_card")}</p>
                <p className="bottom-text">{t("main.fifth_card1")}</p>
              </div>
            </div>
          </div>
        </section>
      </div>{" "}
    </div>
  );
};
export default Main;
