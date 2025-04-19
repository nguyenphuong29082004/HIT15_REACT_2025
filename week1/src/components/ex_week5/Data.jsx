import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./Weather";
import "./responsive.scss"

function Data() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [country, setCountry] = useState("");
  const [units, setUnits] = useState(true);
  const [data, setData] = useState([]);
  const [daily, setDaily] = useState([]);
  const [dataNow, setDataNow] = useState({});
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=9f70a3cd6c6c1218240e07fc1be919bc&units=metric&lang=en`
        );
        setDataNow(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${country}&appid=9f70a3cd6c6c1218240e07fc1be919bc&units=${
            units ? "metric" : "imperial"
          }&lang=en`
        );
        const allForecasts = res.data.list;
        // Lọc 1 bản ghi mỗi ngày (giờ 12:00:00)
        const dailyForecast = allForecasts.filter((forecast) =>
          forecast.dt_txt.includes("12:00:00")
        );
        setData(res.data);
        setDaily(dailyForecast);
        console.log("filtered daily data:", dailyForecast);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [country, units]);

  return (
    // <div>
    //   {loading && <p>Loading...</p>}
    //   {error && <p style={{ color: "red" }}>{error}</p>}
    //   {data.map((item, index) => (
    //     <div key={index}>
    //       <p>{item.dt_txt}</p>
    //       <p>{item.main.temp}°{units ? "C" : "F"}</p>
    //       <p>{item.weather[0].description}</p>
    //     </div>
    //   ))}
    // </div>
    <div>
        <Weather units={units} setUnits={setUnits} data={data} setCountry={setCountry} 
        loading={loading} error={error} dailyForecast={daily}
        dataNow={dataNow} title={title} setTitle={setTitle}/>
    </div>
  );
}

export default Data;
