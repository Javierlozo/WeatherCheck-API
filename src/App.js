import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import id from "./id";
import MediaCard from "./component/MediaCard";

function App() {
  const [weather, setWeather] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [query, setQuery] = useState({
    city: "Oymyakon",
    state: "SC",
    country: "RU",
  });

  useEffect(() => {
    async function getData() {
      try {
        const queryString = `${query.city},${query.state},${query.country}`;
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${queryString}&appid=${id}`
        );
        setWeather(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [toggle]);

  return (
    <div className="App">
      {weather.main && (
        <MediaCard
          query={query}
          weather={weather}
          setQuery={setQuery}
          setToggle={setToggle}
          toggle={toggle}
        ></MediaCard>
      )}
    </div>
  );
}

export default App;
