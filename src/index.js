import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import global_rus from "./translations/rus/global.json";
import global_uzb from "./translations/uzb/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "ru",
  resources: {
    uz: {
      global: global_uzb,
    },
    ru: {
      global: global_rus,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
