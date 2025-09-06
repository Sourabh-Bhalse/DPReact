 import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";

export default function WeatherInfoBox({ weather }) {
  if (!weather) return null; // ✅ Don't render if no weather data

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt={3} // margin-top
    >
      <Card sx={{ maxWidth: 400, borderRadius: 3, boxShadow: 4 }}>
        <CardActionArea>
          {/* 🌥 Cloud/Weather Image */}
          <CardMedia
            component="img"
            height="180"
            image="https://plus.unsplash.com/premium_photo-1733259691737-6b9a4f78c6c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"
            alt="Weather"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div" align="center">
              {weather.city}, {weather.country}
            </Typography>

            <Typography variant="body1" color="text.primary" align="center">
              🌡️ Temperature: {weather.temp} °C
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              ⬇️ Min: {weather.tempMin} °C | ⬆️ Max: {weather.tempMax} °C
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              💧 Humidity: {weather.humidity}%
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              📊 Pressure: {weather.pressure} hPa
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
