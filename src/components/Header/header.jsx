import React from "react";
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
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
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
          <p>{t("header.service")}</p>
          <p>{t("header.about")}</p>
          <p>{t("header.command")}</p>
          <p>{t("header.contact")}</p>
        </nav>

        <button className="phone_button">+998333000057</button>
        <div className="tranlate_icons_box">
          <img
            onClick={() => handleChangeLaunguage("uz")}
            src={logoUzb}
            alt=""
          />
          <img
            onClick={() => handleChangeLaunguage("ru")}
            src={logoRus}
            alt=""
          />
        </div>
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
      <div className="logo_contact_wrapper">
        <img src={arrowIcon} alt="" />
        <button className="phone2_button">333000057</button>
      </div>
    </div>
  );
};
export default Header;
