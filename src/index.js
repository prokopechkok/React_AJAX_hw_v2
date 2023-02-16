import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./App.css";
import Weather from "./Weather";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>React AJAX</h1>

      <h3>Challenge 1</h3>
      <p>Import axios</p>

      <h3>Challenge 2</h3>
      <p>
        Create a new component called Weather with a city property which returns
        an h1 with the sentence "The temperature in city is something°C".
        Include it here
      </p>
      <Weather city="Paris" />

      <h3>Challenge 3</h3>
      <p>Use the OpenWeather API to get the city temperature in Celsius</p>
      <Weather city="Lviv" />
    </div>
  </StrictMode>
);
