 import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";
import WeatherInfoBox from "./WeatherInfoBox";

export default function SearchBox() {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
  const API_KEY = "5bbbb824bcc57c601991397d1fa13477";

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  // ✅ Fetch weather data
  const getWeather = async (city) => {
    try {
      let response = await fetch(
        `${API_URL}q=${city}&appid=${API_KEY}&units=metric`
      );
      let data = await response.json();

      if (data.cod !== 200) {
        alert(data.message || "City not found");
        return;
      }

      let result = {
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        city: data.name,
        country: data.sys.country,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
      };

      setWeather(result);
    } catch (err) {
      console.error("Error fetching weather:", err);
    }
  };

  // ✅ Handle input change
  const handleChange = (e) => {
    setCity(e.target.value);
  };

  // ✅ Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    getWeather(city);
    setCity("");
  };

  return (
    <div className="card">
      {/* <h3>Search for the weather</h3> */}
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>

      {/* ✅ Separate Component for Weather */}
      <WeatherInfoBox weather={weather} />
    </div>
  );
}
