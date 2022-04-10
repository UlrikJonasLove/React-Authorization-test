import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { claim } from "./components/Auth/Auth.models";
import AuthContext from "./components/Auth/AuthContext";

export const App = () => {
  const [claims, setClaims] = useState<claim[]>([
    { name: "email", value: "test@hotmail.com" },
  ]);

  return (
    <AuthContext.Provider value={{ claims, update: setClaims }}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </AuthContext.Provider>
  );
};
