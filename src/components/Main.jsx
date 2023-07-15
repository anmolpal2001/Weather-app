import React, { useState, useEffect } from "react";
import loader from "./WeatherIcons.gif";
import "./Main.css";
import { BiCurrentLocation, BiSolidThermometer } from "react-icons/bi";
import {TiWeatherPartlySunny} from"react-icons/ti"
import Forcast from "./Forcast";
import Highlights from "./Highlights";
import WeatherInfo from "./WeatherInfo";
import Footer from "./Footer";

const Main = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [searchCity, setSearchCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  
  const fetchWeatherData = async (latitude, longitude,city) => {
    const apiKey = "7cbccd5f565f53255812fd8d1762ae73"; 
    
    let apiUrl;
    if (city) {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
      } else if (latitude && longitude) {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
      } else {
        return;
      }

      try {
        setIsLoading(true);
        const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);
          setIsLoading(false);
        } else {
          setError("Failed to fetch weather data");
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError("Failed to fetch weather data");
        setIsLoading(false);
      }
  };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
            const newLatitude = position.coords.latitude;
            const newLongitude = position.coords.longitude;
  
           
            if (latitude !== newLatitude || longitude !== newLongitude) {
              setLatitude(newLatitude);
              setLongitude(newLongitude);
            }
  
            fetchWeatherData(newLatitude, newLongitude,searchCity);
        },
        (error) => {
            const latitude = 19.07;
            const longitude = 72.87;
            fetchWeatherData(latitude,longitude);
            alert(
                "You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real time weather."
              );
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setError("Geolocation is not supported");
    }
  },  [latitude, longitude,null]);

  const handleCurrentLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          fetchWeatherData(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          setError("Error getting location");
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setError("Geolocation is not supported");
    }
  };

  const handleSearch = () => {
    fetchWeatherData(null, null, searchCity);
    setSearchCity("");
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchWeatherData(null, null, searchCity);
      setSearchCity("");
    }
  };
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchCity(value);
  };


  if (weatherData) {
    return (
      <>
        <div className="outer">
          <div className="header">
            <div className="app-name">
              <div className="app-icon"><TiWeatherPartlySunny/></div> 
              <div className="name">weather app</div>
            </div>
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Enter city name"
                value={searchCity}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
              />
              <button class="search-button" onClick={handleSearch}>Search</button>
            </div>
            <div className="app-name-2">
              <button className="location" onClick={handleCurrentLocationClick}>
                <span className="icon">
                  <BiCurrentLocation size={30} />
                </span>
                <span className="location-bt">Current Location</span>
              </button>
            </div>
          </div>
          <div className="remaining-space">
            <div className="row">
              <WeatherInfo weatherData={weatherData} />
              <Highlights weatherData={weatherData} />
            </div> 
            <div className="next-row">
            <Footer/>
            </div>
            {/* <Forcast /> */}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="outer-box">
        <div className="background">
          <div className="image">
          <img src={loader} alt="Loader"/>
          </div>
        <div className="detect">
          Detecting your location
       </div>
      <div className="text">
         Your current location will be displayed on the App and used for calculating real-time weather. </div>
      </div>
      </div>
    );
  }
};

export default Main;
