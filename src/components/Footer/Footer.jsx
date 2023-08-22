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
      <div>
        <img src={LogoFooter} alt="logo" />
      </div>
      <div>
        <ul>
          <li>{t("footer.servece")}</li>
          <li>{t("footer.about")}</li>
          <li>{t("footer.comond")}</li>
          <li>{t("footer.info")}</li>
        </ul>
      </div>
      <div className="border">
        <ul>
          <li>{t("footer.telephone")}</li>
          <li>{t("footer.phonenumber")}</li>
          <li>{t("footer.adres")}</li>
          <li>{t("footer.adre2")}</li>
        </ul>
      </div>
      <div>
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
        <button className="btn-col-center">{t("main.first-button")}</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// {t("footer.phonenumber")}
