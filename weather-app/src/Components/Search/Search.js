import React, { useState } from "react";

function Search({ useWeatherDetail }) {
  const api = {
    key: "7ed2349df243995ece9e306121e76ad4",
    base: "https://api.openweathermap.org/data/2.5/weather",
  };

  const [searchParameter, useSearchParameter] = useState("");

  const searchCall = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}?q=${searchParameter}&units=metric&lang=tr&appid=${api.key}`)
        .then((veri) => veri.json())
        .then((sonuc) => {
          useSearchParameter("");
          useWeatherDetail(sonuc);
        });
    }
  };

  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder="City"
        onChange={(e) => useSearchParameter(e.target.value)}
        value={searchParameter}
        onKeyPress={searchCall}
      />
    </div>
  );
}

export default Search;
