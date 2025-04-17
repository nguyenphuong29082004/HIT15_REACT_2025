import React, { useState } from "react";
import "./Home.scss";
function Home() {
  const [tem, setTem] = useState(true);
  return (
    <div className="wrapper_weather">
      <div className="header">
        <h1>Weather Forecast App</h1>
        <div className="header__search">
          <input type="text" placeholder="Enter City Name" />
          <button>Enter</button>
        </div>
        <div className="header__btn">
          <button onClick={() => setTem((prevTem) => !prevTem)} >
            {tem ? "C" : "F"}
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
