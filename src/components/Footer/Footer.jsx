import React from "react";
import "./Footer.css";
import LogoFooter from "../../assets/logo/Rectangle 56.png";
import LogoYutub from "../../assets/logo/yutube.png";
import LogoInstagram from "../../assets/logo/instagram.png";
import LogoTelegram from "../../assets/logo/telegram.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <footer>
      <div className="footer-child">
        <img src={LogoFooter} alt="logo" className="logo-img" />
        <div className="logo-footer">
          <a href="https://www.youtube.com/?hl=ru">
            <img src={LogoYutub} alt="" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={LogoInstagram} alt="" />
          </a>
          <a href="https://web.telegram.org/a/">
            <img src={LogoTelegram} alt="" />
          </a>
        </div>
      </div>
      <div className="active">
        <ul>
          <li>{t("footer.servece")}</li>
          <li>{t("footer.about")}</li>
          <li>{t("footer.comond")}</li>
          <li>{t("footer.info")}</li>
        </ul>
      </div>
      <div className="border">
        <ul>
          <div>
            <li>{t("footer.telephone")}</li>
            <li>{t("footer.phonenumber")}</li>
          </div>
          <div>
            <li>{t("footer.adres")}</li>
            <li>{t("footer.adre2")}</li>
          </div>
        </ul>
      </div>
      <div className="footer">
        <div className="logo-footer">
          <a href="https://www.youtube.com/?hl=ru">
            <img src={LogoYutub} alt="" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={LogoInstagram} alt="" />
          </a>
          <a href="https://web.telegram.org/a/">
            <img src={LogoTelegram} alt="" />
          </a>
        </div>
        <div>
          <button className="btn-col-center">
            <a href="tel:+998333000057">{t("main.first-button")}</a>
          </button>
        </div>
      </div>
      <div className="Responsive-wrapper">
        <div className="Img_wrappers">
          <img src={LogoFooter} alt="logo" className="logo-img" />
          <div className="logo-footer">
            <a href="https://www.youtube.com/?hl=ru">
              <img src={LogoYutub} alt="" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={LogoInstagram} alt="" />
            </a>
            <a href="https://web.telegram.org/a/">
              <img src={LogoTelegram} alt="" />
            </a>
          </div>
        </div>
        <div className="Img_wrappers">
          <p className="phone_footer">{t("footer.telephone")}</p>
          <p className="real-phone-number">{t("footer.phonenumber")}</p>
        </div>
        <div className="Img_wrappers">
          <p className="phone_footer">{t("footer.adres")}</p>
          <p className="real-phone-number">{t("footer.adre2")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// {t("footer.phonenumber")}
