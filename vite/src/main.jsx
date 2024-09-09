import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "primereact/resources/themes/lara-light-cyan/theme.css";
import "./main.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import ContextProvider from "./ContextProvider.jsx";
import "react-h5-audio-player/lib/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
