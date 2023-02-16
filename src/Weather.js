import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  if (temperature) {
    return (
      <h1>
        The temperature in {props.city} is {Math.round(temperature)}°C
      </h1>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=8438301216c2822a596249b61bb568d7&units=metric`;
    axios.get(url).then(showTemperature);
    return <h1>Loading temperature for {props.city}..</h1>;
  }
}
