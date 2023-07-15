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
const WeatherInfo = (props) => {
    const weatherData = props.weatherData;
  return (
    <div className="div1">
                <p className="now">Now</p>
                <div className="data1">
                  <div className="weather">
                    <div className="WeatherTemperature">
                      <span className="temperature">
                        {(weatherData.main.temp - 273.15).toFixed(2)}
                      </span>
                      <span className="unit">°C</span>
                    </div>
                    <p>{weatherData.weather[0].description}</p>
                  </div>
                  <div className="weather-icon">
                    <span>
                      <WeatherIcon
                        code={weatherData.weather[0].icon}
                        size={112}
                      />
                    </span>
                  </div>
                </div>
                <hr className="custom-line"></hr>
                <div className="date-time">
                  <div className="dmy">
                    <div className="current-time">
                      <Clock format="HH:mm:ss" interval={1000} ticking={true} />
                    </div>
                    <div className="current-data">
                      <span className="icon">
                        <AiOutlineCalendar />
                      </span>
                      <p className="date">
                        <FormattedDate
                          timestamp={weatherData.dt}
                          timezoneOffset={weatherData.timezone}
                        />
                      </p>
                    </div>
                    <div className="title">
                      <h2>
                        {weatherData.name},{" "}
                        <span>{weatherData.sys.country}</span>{" "}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default WeatherInfo