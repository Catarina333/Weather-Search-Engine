import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearchEngine(props) {
  let [celsius, setCelsius] = useState(null);

  function showTemperature(response) {
    setCelsius(response.data.main.temp);
  }

  function handleClick() {
    alert(`click ${props.city}`);
    let apikey = "6961e066709135b95dd6966dbe6ecd97";
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${
      props.city
    }&appid=${apikey}&units=metric`;
    axios.get(apiurl).then(showTemperature);
  }

  if (celsius !== null) {
    return (
      <div className="Temperature">
        The temperature in {props.city} is {celsius} Cº
      </div>
    );
  } else {
    return (
      <div className="Temperature">
        <button onClick={handleClick}>Show temperature for {props.city}</button>
      </div>
    );
  }
}
