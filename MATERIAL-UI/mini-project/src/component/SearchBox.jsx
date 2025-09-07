 import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import WeatherInfoBox from "./WeatherInfoBox";
import Marquee from "./Marquee";

export default function SearchBox() {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
  const API_KEY = "5bbbb824bcc57c601991397d1fa13477";

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async (city) => {
    try {
      const response = await fetch(
        `${API_URL}q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      if (data.cod !== 200) {
        alert(data.message || "City not found");
        return;
      }

      setWeather({
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        city: data.name,
        country: data.sys.country,
        condition: data.weather[0].main,
      });
    } catch (err) {
      console.error("Error fetching weather:", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    getWeather(city);
    setCity("");
  };

  return (
    <>
      <div
        style={{
          maxWidth: 450,
          width: "90%",
          margin: "0 auto",
          padding: "0px",
          background: "rgba(255, 255, 255, 0.95)",
          borderRadius: "20px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <TextField
           style={{
          maxWidth: 350,
          display: "flex",
alignItems: "center", justifyContent: "center",
          margin: "0 auto",
        }}
          
            id="city"
            label="Enter City Name"
            variant="outlined"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": { borderRadius: "12px" },
              "& .MuiInputLabel-root": { fontWeight: 500 },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              width: { xs: "60%", sm: "30%" },
              margin: "0 auto",
              padding: "12px 0",
              fontWeight: "bold",
              fontSize: "15px",
              borderRadius: "12px",
              background: "linear-gradient(to right, #667eea, #764ba2)",
              "&:hover": {
                background: "linear-gradient(to right, #764ba2, #667eea)",
              },
            }}
          >
            Search
          </Button>
        </form>
        <br />
        <br />
      </div>

      <div style={{ width: "100%" }}>
        <Marquee />
      </div>

      <WeatherInfoBox weather={weather} />
    </>
  );
}
