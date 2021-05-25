import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [search, setSearch] = useState("Pune");
  const [wheatherData, setWheatherData] = useState("");
  const [city, setCity] = useState("Pune");
  const fetchWheather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=385951a38c9b9290e5f3ef2d953c517e`;
    const data = await axios
      .get(url)
      .then((res) => {
        console.log(res.data.main);
        setWheatherData(res.data.main);
        setCity(res.data.name);
      })
      .catch((err) => console.log(err));
  };

  console.log("wheather", wheatherData);
  useEffect(() => {
    fetchWheather();
  }, [search]);
  return (
    <div className="home">
      <div className="main">
        <input
          type="text"
          placeholder="search here..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <h1>
          {city}, <span>{wheatherData.feels_like}°C</span>
        </h1>
        <h2>
          Maximum Temp : <span>{wheatherData.temp_max}°C</span>
        </h2>
        <h2>
          Minium Temp :<span>{wheatherData.temp_min}°C</span>
        </h2>
        <h2>
          Humidity : <span>{wheatherData.humidity}%</span>
        </h2>
      </div>
    </div>
  );
};

export default Home;
