import { useState, useEffect } from "react";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { LuWind } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setweather] = useState("islamabad");
  const [error, seterror] = useState("");

  function handleChange(e) {
    setCity(e.target.value);
  }

  const API_KEY = "30a6a186b0c4af1a33156c852067c0e2";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  async function fetchData() {
    try {
      let response = await fetch(url);
      let output = await response.json();
      if (response.ok) {
        setweather(output);
        seterror("");
        console.log(weather);
      } else {
        seterror("No data found , Enter Valid City Name");
        setweather("");
      }
    } catch (error) {
      //   seterror("no data found");
    }
  }

  useEffect(() => {
    fetchData();
  }, [city]);

  return (
    <div
      className="flex flex-col bg-blue-600 p-4 w-1/4 rounded-lg -xl:w-1/3 -lg:w-1/2 -md:w-3/5 -sm:w-3/4 -xsm:w-4/5 -xxsm:w-11/12"
      style={{ backgroundColor: "#a7e7ff" }}
    >
      <h1 className=" text-3xl mb-6 font-thin  flex justify-center">
        ClearSKY
      </h1>
      <div className="flex gap-2 justify-center">
        <input
          type="text "
          className="py-2 px-4 w-2/3 border-2 rounded-full outline-none "
          style={{ boxShadow: "grey 3px 3px 3px 0px" }}
          placeholder="Enter City"
          value={city}
          onChange={handleChange}
        />
        <button
          onClick={fetchData}
          style={{ boxShadow: "grey 3px 3px 3px 0px" }}
          className="rounded-full w-12 h-12 flex justify-center items-center bg-white"
        >
          <FaMagnifyingGlassLocation className="text-2xl" />
        </button>
      </div>
      {error && (
        <p className=" w-full flex justify-center text-xl my-6 font-bold">
          {error}
        </p>
      )}
      {weather && weather.weather && (
        <div className="content flex flex-col gap-4 justify-center items-center ">
          <div className="weather-image">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt=""
              className=" mx-auto"
            ></img>
            <h3 className="desc text-2xl   capitalize">
              {weather.weather[0].description}
            </h3>
          </div>
          <h1 className="text-6xl font-bold my-2 ">
            {weather.main.temp}&deg;C
          </h1>
          <div className="weather-city text-2xl font-bold flex justify-center items-center">
            <FaLocationDot
              className="text-2xl mr-1"
              style={{ color: "#3c90d9" }}
            />

            <p>
              {weather.name},<span>{weather.sys.country}</span>
            </p>
          </div>

          <div className="weather-stats flex w-full gap-4 justify-center my-2">
            <div
              className="wind flex flex-col justify-center items-center w-36 py-2 font-bold rounded-xl text-white"
              style={{ backgroundColor: "#3c90d9" }}
            >
              <div className="wind-icon">
                <LuWind className="text-4xl mb-2" />
              </div>
              <h3 className="wind-speed">
                {weather.wind.speed}
                <span>Km/h</span>
              </h3>
              <h3 className="wind-heading uppercase ">Wind Speed</h3>
            </div>
            <div
              className="humidity flex flex-col justify-center items-center w-36 py-2 font-bold rounded-xl  text-white"
              style={{ backgroundColor: "#e04d4d" }}
            >
              <div className="humidity-icon">
                <WiHumidity className="text-5xl" />
              </div>
              <h3 className="humidity-percent">
                {weather.main.humidity}
                <span>%</span>
              </h3>
              <h3 className="humidity-heading uppercase ">Humidity</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
