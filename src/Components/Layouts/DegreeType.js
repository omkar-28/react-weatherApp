import React from "react";

const DegreeType = ({ degreetype, updateDegree }) => {
  return (
    <div className="degree">
      <div className="custom-radio">
        <input
          type="radio"
          name="degree-type"
          value="celsius"
          id="celsius"
          onChange={updateDegree}
          checked={degreetype === "celsius"}
        />
        <label className="form-check-label" htmlFor="celsius">
          Celsius
        </label>
      </div>

      <div className="custom-radio">
        <input
          type="radio"
          name="degree-type"
          value="fahrenheit"
          id="fahrenheit"
          onChange={updateDegree}
          checked={degreetype === "fahrenheit"}
        />
        <label className="form-check-label" htmlFor="fahrenheit">
          Farenheit
        </label>
      </div>
    </div>
  );
};

export default DegreeType;
