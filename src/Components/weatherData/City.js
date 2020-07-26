import React from "react";
import { convertCtoF } from "../../utils/helper";

const City = ({ weatherInfo, degreetype }) => {
  const {
    city,
    country,
    date,
    icon,
    description,
    highTemp,
    lowTemp,
    humidity,
    temp,
    wind,
    sunrise,
    sunset,
  } = weatherInfo;

  return (
    <div className="card-body">
      <div className="card-head">
        <h3>
          {city}, {country}
        </h3>
        <p>{date}</p>
      </div>
      <div className="card-content">
        <div className="current-city">
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="icon"
          />
          <h4>
            <span>{description}</span>
            {degreetype === "celsius"
              ? Math.round(temp)
              : convertCtoF(Math.round(temp))}
            &#176; {degreetype === "celsius" ? "C" : "F"}
          </h4>
        </div>
        <ul>
          <li>
            {wind} mph
            <br /> Wind
          </li>
          <li>
            {highTemp}
            <br /> High
          </li>
          <li>
            {lowTemp}
            <br /> Low
          </li>
          <li>
            {sunrise}
            <br /> Sunrise
          </li>
          <li>
            {sunset}
            <br /> Sunset
          </li>
          <li>
            {humidity} %
            <br /> Rain
          </li>
        </ul>
      </div>
    </div>
  );
};

export default City;
