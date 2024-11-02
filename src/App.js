import React from "react";
import "./App.css";
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <div className="container">
       <Weather />
        <footer>
          This project was created by{" "}
          <a
            href="https://www.shecodes.io/graduates/83802-josephine-lu-ching-jacobs"
            target="_blank"
            rel="noreferrer"
          >
            Josephine Jacobs
          </a>{" "}
          and is open-source on{" "}
          <a
            href="https://github.com/JosephineJacobs/my-weather-react-app-jacobs"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          , published on{" "}
          <a
            href="https://myweatherreactappjacobs.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>{" "}
          .
        </footer>
      </div>
    </div>
  );
}
