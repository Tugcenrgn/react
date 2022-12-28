import React from "react";

function Result({ weathers }) {
  return (
    <>
      {typeof weathers.main != "undefined" && (
        <div className="result">
          <div className="city">
            {weathers.name},{weathers.sys.country}
          </div>
          <div className="detail">
            <div className="degree">{Math.round(weathers.main.temp)} °C</div>
            <div className="status">{weathers.weather[0].description}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Result;
