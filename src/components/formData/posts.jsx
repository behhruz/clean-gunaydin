import React from "react";
import "./posts.css";
import { useTranslation } from "react-i18next";
import rasm1 from '../../assets/img/young-housewife-is-wearing-yellow-gloves-while-cleaning-with-product-clean-white-wall 1.png'
import FormImg from "../../assets/logo/uborshik.png"
export const Posts = () => {
  const Submit = (e) => {
    const formElement = document.querySelector("form");
    e.preventDefault();
    console.log("submited");
    const formData = new FormData(formElement);
    if (Submit == true) {
      alert("True");
    }
    fetch(
      "https://script.google.com/macros/s/AKfycbytVv6OuO1ZIchKpzDOaBO0VT-4DG3QA08p7XGRzLPqVvkPMUDHXqG26PzpB9115BJspA/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  };
  const [t, i18n] = useTranslation("global");
  return (
    <div className="Posts-wrapper">
      <div className="Posts-container">
      <button>{t("main.first-button")}</button>
        <div className="form-display">
        <div className="Posts-container-right">
          <form className="form" onSubmit={(e) => Submit(e)}>
            <input className="inputs" type="text" placeholder="Имя" name="Name" />
            <input className="inputs" type="text" placeholder="Фамилия" name="Surname" />
            <input className="inputs" type="number" placeholder="(90) 123 45 67" name="Phone" />
            <input className="addBtn" type="submit" placeholder="Отправить-заявку" />
          </form>
        </div>
        <div className="img-form">
          <img src={FormImg} alt="" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
