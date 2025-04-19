import React, { useState } from "react";
import "./Weather.scss";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { GiPressureCooker } from "react-icons/gi";
import { WiSunrise } from "react-icons/wi";
import { WiSunset } from "react-icons/wi";

function Weather({setUnits,data,setCountry,loading,error,units,dataNow,dailyForecast,title, setTitle}) {
  const [ison, setIson] = useState(false)
  return (
    <div>
      <div className="wrapper_weather">
        <div className="overlay"></div>
        <div className="header">
          <h1>Weather Forecast App</h1>
          <div>
            <form
              className="header__search"
              onSubmit={(e) => {
                e.preventDefault(); // Ngăn reload trang
                setCountry(title); // Gọi API với title mới
                setTitle("");
                setIson(true)
              }}
            >
              <input
                type="text"
                placeholder="Enter City Name"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <button
                type="submit"
                // onClick={() => setSearch(!setSearch)}
              >
                Enter
              </button>

              {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
            </form>
            <div className="loading">
               {ison && loading && <p>Loading...</p>}
            </div>
            
             <div className="error">
              {ison && error && !data.city &&<p >City not found or error fetching data. Please try again.</p>}
             </div>
              
          </div>
          <div className="header__btn">
            <button onClick={() => setUnits((prevTem) => !prevTem)}>
              {units ? "C" : "F"}
            </button>
          </div>
        </div>

        {/* content */}
        <div className={`content ${ison ? "content__on" : "content__off"}`}>
          <div className="content__above">
            <div className="content__above1">
              <div className="content__city">
                <h2>
                  {data.city?.name} {data.city?.country}
                </h2>
                <p>
                  {data.list &&
                    data.list.length > 0 &&
                    data.list[0].dt &&
                    new Date(data.list[0].dt * 1000).toLocaleDateString(
                      "en-US",
                      {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                </p>
              </div>
              <div className="content__temp-now">
                <div>
                  {data.list && data.list.length > 0 && (
                    <img
                      src={`https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`}
                      alt="weather icon"
                    />
                  )}
                </div>
                <div>
                  <h1 className="temp">
                    {data.list &&
                      data.list.length > 0 &&
                      `${Math.round(data.list[0].main.temp)}° ${
                        units ? "C" : "F"
                      }`}
                  </h1>
                  <p>
                    {data.list &&
                      data.list.length > 0 &&
                      data.list[0].weather[0].main}
                  </p>
                </div>
              </div>
            </div>
            <div className="content__above2">
              <div className="content__above2--item">
                <div className="icon icon-wind">
                  <FaWind />
                </div>
                <div className="data">
                  <p>Wind</p>
                  {data.list && data.list.length > 0 && (
                    <p>
                      <strong>{data.list[0].wind.speed} km/h</strong>
                    </p>
                  )}
                </div>
              </div>
              <div className="content__above2--item">
                <div className="icon icon-humidity">
                  <WiHumidity />
                </div>
                <div className="data">
                  <p>Humidity</p>
                  <p>
                    <strong>
                      {/* {" "} */}
                      {data.list &&
                        data.list.length > 0 &&
                        `${Math.round(data.list[0].main.humidity)}%`}{" "}
                    </strong>
                  </p>
                </div>
              </div>
              <div className="content__above2--item">
                <div className="icon icon-pressure">
                  <GiPressureCooker />
                </div>
                <div className="data">
                  <p>Pressure</p>
                  <p>
                    <strong>
                      <strong>
                        {" "}
                        {data.list &&
                          data.list.length > 0 &&
                          `${Math.round(data.list[0].main.humidity)} hPa`}{" "}
                      </strong>
                    </strong>
                  </p>
                </div>
              </div>
              <div className="content__above2--item">
                <div className="icon icon-sunrise">
                  <WiSunrise />
                </div>
                <div className="data">
                  <p>Sunrise</p>
                  <p>
                    <strong>
                      {dataNow.sys &&
                        dataNow.sys.sunrise &&
                        new Date(dataNow.sys.sunrise * 1000).toLocaleTimeString(
                          "vi-VN",
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )}{" "}
                      AM
                    </strong>
                  </p>
                </div>
              </div>
              <div className="content__above2--item">
                <div className="icon icon-sunset">
                  <WiSunset />
                </div>
                <div className="data">
                  <p>Sunset</p>
                  <p>
                    <strong>
                      {dataNow.sys &&
                        dataNow.sys.sunset &&
                        new Date(dataNow.sys.sunset * 1000).toLocaleTimeString(
                          "vi-VN",
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )}{" "}
                      PM
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content__under">
            {dailyForecast.map((item, index) => (
              <div key={index} className="content__under--item">
                <h3>
                  {new Date(item.dt * 1000).toLocaleDateString("en-US", {
                    weekday: "short", // Sat
                    month: "short", // Apr
                    day: "numeric", // 19
                  })}
                </h3>
                <img
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  alt="weather icon"
                />
                <p>
                  {item.main.temp}°{units ? "C" : "F"}
                </p>
                <p>{item.weather[0].description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
