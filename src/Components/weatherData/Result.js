import React from "react";
import City from "./City";
import Forecast from "./Forecast";
import DegreeType from "../Layouts/DegreeType";

const Result = React.memo(({ weatherInfo, degreetype, updateDegree }) => {
  const { forecast } = weatherInfo;
  let classFade = "";
  if (weatherInfo) {
    classFade = "fadeIn";
  }
  return (
    <div className={classFade}>
      <DegreeType degreetype={degreetype} updateDegree={updateDegree} />
      <div className="city-card">
        <City weatherInfo={weatherInfo} degreetype={degreetype} />
        <Forecast forecast={forecast} degreetype={degreetype} />
      </div>
    </div>
  );
});

export default Result;
