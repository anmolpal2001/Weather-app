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
const Forcast = () => {
  return (
    <div className="lower-part">
        <div className="forcast">
            <p className="days">5 Days Forecast</p>
            <div className="forcast-data">
            <div className="data-day">
                <div><WiDayCloudy size={30} color="white"/></div>
                <div className="temp-data">32<sup>°C</sup></div>
                <div className="date-data">Thursday, 1 March</div>
            </div>
            <div className="data-day">
                <div><WiDayCloudy size={30} color="white"/></div>
                <div className="temp-data">32<sup>°C</sup></div>
                <div className="date-data">Thursday, 1 March</div>
            </div>
            <div className="data-day">
                <div><WiDayCloudy size={30} color="white"/></div>
                <div className="temp-data">32<sup>°C</sup></div>
                <div className="date-data">Thursday, 1 March</div>
            </div>
            <div className="data-day">
                <div><WiDayCloudy size={30} color="white"/></div>
                <div className="temp-data">32<sup>°C</sup></div>
                <div className="date-data">Thursday, 1 March</div>
            </div>
            <div className="data-day">
                <div><WiDayCloudy size={30} color="white"/></div>
                <div className="temp-data">32<sup>°C</sup></div>
                <div className="date-data">Thursday, 1 March</div>
            </div>
            </div>
        </div>
        <div className="today">
            <p className="today-at">Today at</p>
            <div className="card-box">
                <div className="card">
                    <div className="time">4 AM</div>
                    <div className="card-icon"><WiDayCloudy size={60} color="white"/></div>
                    <div className="temp">32<sup>°C</sup></div>
                </div>
                <div className="card">
                    <div className="time">4 AM</div>
                    <div className="card-icon"><WiDayCloudy size={60} color="white"/></div>
                    <div className="temp">32<sup>°C</sup></div>
                </div>
                <div className="card">
                    <div className="time">4 AM</div>
                    <div className="card-icon"><WiDayCloudy size={60} color="white"/></div>
                    <div className="temp">32<sup>°C</sup></div>
                </div>
                <div className="card">
                    <div className="time">4 AM</div>
                    <div className="card-icon"><WiDayCloudy size={60} color="white"/></div>
                    <div className="temp">32<sup>°C</sup></div>
                </div>
                <div className="card">
                    <div className="time">4 AM</div>
                    <div className="card-icon"><WiDayCloudy size={60} color="white"/></div>
                    <div className="temp">32<sup>°C</sup></div>
                </div>
                <div className="card">
                    <div className="time">4 AM</div>
                    <div className="card-icon"><WiDayCloudy size={60} color="white"/></div>
                    <div className="temp">32<sup>°C</sup></div>
                </div>
                <div className="card">
                    <div className="time">4 AM</div>
                    <div className="card-icon"><WiDayCloudy size={60} color="white"/></div>
                    <div className="temp">32<sup>°C</sup></div>
                </div>
                <div className="card">
                    <div className="time">4 AM</div>
                    <div className="card-icon"><WiDayCloudy size={60} color="white"/></div>
                    <div className="temp">32<sup>°C</sup></div>
                </div>
                
            </div>
        </div>
            </div>
  )
}

export default Forcast