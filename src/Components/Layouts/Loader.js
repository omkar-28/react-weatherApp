import React from "react";

function Loader({ value }) {
  return (
    <React.Fragment>
      <h2 className={value ? "fetching fadeIn" : "fetching"}>
        hold on while we fetch weatherInfo for {value} city
      </h2>
      <div className="pulseLoader"></div>
    </React.Fragment>
  );
}

export default Loader;
