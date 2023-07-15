import React, { useState, useEffect } from "react";
import "./Main.css";
import Clock from "react-live-clock";
import { BiCurrentLocation, BiSolidThermometer } from "react-icons/bi";
import { PiWavesBold } from "react-icons/pi";
import { AiOutlineCalendar } from "react-icons/ai";
import { TbWind } from "react-icons/tb";
import { WiDayCloudy, WiHumidity, WiSunrise, WiSunset } from "react-icons/wi";
import { MdOutlineVisibility } from "react-icons/md";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";
const Highlights = (props) => {
    const weatherData = props.weatherData;
    let sunriseTime;
    let sunsetTime;
  
    if (weatherData) {
      const sunriseDate = new Date(weatherData.sys.sunrise * 1000);
      const sunsetDate = new Date(weatherData.sys.sunset * 1000);
  
      sunriseTime = sunriseDate
        .toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          hourCycle: "h12",
        })
        .toUpperCase();
      sunsetTime = sunsetDate
        .toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          hourCycle: "h12",
        })
        .toUpperCase();
    }
  return (
    <div className="div2">
      <p className="heading">Today's Highlights</p>
      <div className="row-1">
        <div className="detail-1">
          <p className="para">Humidity</p>
          <div className="humid">
            <span className="humid-icon">
              <WiHumidity size={60} />
            </span>
            <div className="humid-data">{weatherData.main.humidity}%</div>
          </div>
        </div>
        <div className="detail-3">
          <p className="para">Visibility</p>
          <div className="humid">
            <span className="humid-icon">
              <MdOutlineVisibility size={60} />
            </span>
            <div className="visible-data">
              {Math.round(weatherData.visibility) / 1000}
              <span> Km</span>
            </div>
          </div>
        </div>
        <div className="detail-3">
          <p className="para">Sunrise</p>
          <div className="humid">
            <span className="humid-icon">
              <WiSunrise size={60} />
            </span>
            <div className="sunrise-data">{sunriseTime}</div>
          </div>
        </div>
        <div className="detail-3">
          <p className="para">Sunset</p>
          <div className="humid">
            <span className="humid-icon">
              <WiSunset size={60} />
            </span>
            <div className="sunrise-data">{sunsetTime}</div>
          </div>
        </div>
      </div>
      <div className="row-2">
        <div className="detail-3">
          <p className="para">Pressure</p>
          <div className="humid">
            <span className="humid-icon">
              <PiWavesBold size={60} />
            </span>
            <div className="pressure">
              {weatherData.main.pressure} <span>hPa</span>
            </div>
          </div>
        </div>

        <div className="detail-3">
          <p className="para">Wind</p>
          <div className="humid">
            <span className="humid-icon">
              <TbWind size={60} />
            </span>
            <div className="wind-data">
              {weatherData.wind.speed} <span>Km/h</span>
            </div>
          </div>
        </div>
        <div className="detail-3">
          <p className="para">Feels Like</p>
          <div className="humid">
            <span className="humid-icon">
              <BiSolidThermometer size={60} />
            </span>
            <div className="feels-data">
              {(weatherData.main.feels_like - 273.15).toFixed(2)}
              <sup>°C</sup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
