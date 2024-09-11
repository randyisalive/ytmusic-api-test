import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { AudioTemplate } from "./AudioTemplate.jsx";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "./main.css";

import "primeicons/primeicons.css";

import "./play-song.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AudioTemplate>
      <App />
    </AudioTemplate>
  </React.StrictMode>
);
