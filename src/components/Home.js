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
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ff6347"
            fill-opacity="1"
            d="M0,192L30,186.7C60,181,120,171,180,144C240,117,300,75,360,85.3C420,96,480,160,540,192C600,224,660,224,720,234.7C780,245,840,267,900,272C960,277,1020,267,1080,250.7C1140,235,1200,213,1260,192C1320,171,1380,149,1410,138.7L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>
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
          Minimum Temp :<span>{wheatherData.temp_min}°C</span>
        </h2>
        <h2>
          Humidity : <span>{wheatherData.humidity}%</span>
        </h2>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ff6347"
            fill-opacity="1"
            d="M0,192L30,186.7C60,181,120,171,180,144C240,117,300,75,360,85.3C420,96,480,160,540,192C600,224,660,224,720,234.7C780,245,840,267,900,272C960,277,1020,267,1080,250.7C1140,235,1200,213,1260,192C1320,171,1380,149,1410,138.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Home;
