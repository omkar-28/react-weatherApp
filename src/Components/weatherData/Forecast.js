import React from "react";
import { convertCtoF } from "../../utils/helper";

const Forecast = React.memo(({ forecast, degreetype }) => {
  const dailyData = forecast.filter((item) => item.dt_txt.includes("18:00:00"));

  return (
    <div className="col-6 forcast">
      <h2>Forecast</h2>
      <ul>
        {dailyData.map((item) => (
          <li key={item.dt}>
            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt="cloud"
            />
            <p>
              {degreetype === "celsius"
                ? Math.round(item.main.temp)
                : convertCtoF(Math.round(item.main.temp))}
              &#176; {degreetype === "celsius" ? "C" : "F"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Forecast;
