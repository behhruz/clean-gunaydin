import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./header.css";
import logoGunaydin from "../../assets/logo/Rectangle 56.png";
import logoUzb from "../../assets/logo/Flag_of_Uzbekistan.svg.png";
import logoRus from "../../assets/logo/RUS.png";
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import burgerImg from "../../assets/logo/burger.png";
import arrowIcon from "../../assets/logo/image-removebg-preview (52).png";

export const Header = () => {
  const [t, i18n] = useTranslation("global");
  const handleChangeLaunguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const [isPressed, setIsPressed] = useState(false);

  const toggleIcon = () => {
    setIsPressed(!isPressed);
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a rel="noopener noreferrer" href="#section1">
          {t("header.service")}
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a rel="noopener noreferrer" href="#section2">
          {t("header.about")}
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a rel="noopener noreferrer" href="#section3">
          {t("header.command")}
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a rel="noopener noreferrer" href="#section4">
          {t("header.contact")}
        </a>
      ),
    },
  ];
  return (
    <div className="container_header">
      <div className="header">
        <div className="logo_container">
          <img src={logoGunaydin} alt="" />
        </div>
        <nav>
          <p>
            <a className="a_section" href="#section1">
              {t("header.service")}
            </a>
          </p>
          <p>
            <a className="a_section" href="#section2">
              {t("header.about")}
            </a>
          </p>
          <p>
            <a className="a_section" href="#section3">
              {t("header.command")}
            </a>
          </p>
          <p>
            <a className="a_section" href="#section4">
              {t("header.contact")}
            </a>
          </p>
        </nav>
        <div className="tranlate_icons_box" onClick={toggleIcon}>
          {isPressed ? (
            <img
              onClick={() => handleChangeLaunguage("uz")}
              src={logoUzb}
              alt=""
            />
          ) : (
            <img
              onClick={() => handleChangeLaunguage("ru")}
              src={logoRus}
              alt=""
            />
          )}
          <div className="burger-wrapper3" style={{ display: "flex" }}>
            <a href="tel:+998333000057">
              <button className="phone_button">+998333000057</button>
            </a>{" "}
            <Dropdown
              className="dropdown"
              menu={{ items }}
              placement="bottomRight"
              arrow={{ pointAtCenter: true }}
            >
              <div className="burgerBox">
                <img src={burgerImg} alt="" />
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="logo_contact_wrapper">
        <img src={arrowIcon} alt="" />
        <a href="tel:+998333000057">
          {" "}
          <button className="phone2_button">333000057</button>
        </a>
      </div>
    </div>
  );
};
export default Header;
