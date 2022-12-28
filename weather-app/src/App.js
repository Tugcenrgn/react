import React, { useState } from "react";
import Background from "./Components/Background/Background";
import Search from "./Components/Search/Search";
import Result from "./Components/Result/Result";
import "./style.css";

function App() {
  const [weatherDetail, useWeatherDetail] = useState({});

  return (
    <section className="app">
      <Background
        background={weatherDetail.weather && weatherDetail.weather[0].main}
      />
      <div id="header">Hava Durumu</div>
      <Search useWeatherDetail={useWeatherDetail} />
      <Result weathers={weatherDetail} />
    </section>
  );
}

export default App;
