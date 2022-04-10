import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { Authorized } from "./components/Auth/Authorized";

const Index = () => {
  
    return (
      <div>
        <Authorized 
            authorized={<App />}
            notAuthorized={<>You are not authorized</>}
            />
      </div>
    );
  };

// @ts-ignore
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
