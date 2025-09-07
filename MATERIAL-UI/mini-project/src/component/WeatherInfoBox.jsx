 import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";

import CloudIcon from "@mui/icons-material/Cloud";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import GrainIcon from "@mui/icons-material/Grain";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function WeatherInfoBox({ weather }) {
  if (!weather) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={3}
        minHeight="200px"
      >
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ fontSize: { xs: "1rem", sm: "1.2rem" } }}
        >
          🔍 Search for a city to see weather
        </Typography>
      </Box>
    );
  }

  const getWeatherDetails = (condition = "") => {
    const cond = condition.toLowerCase();

    if (cond.includes("rain")) {
      return {
        image:
          "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=1000&auto=format&fit=crop&q=60",
        icon: <GrainIcon fontSize="large" />,
        color: "#0db2f4ff",
      };
    }
    if (cond.includes("snow")) {
      return {
        image:
          "https://images.unsplash.com/photo-1486944670663-e0a2ea5018eb?w=1000&auto=format&fit=crop&q=60",
        icon: <AcUnitIcon fontSize="large" />,
        color: "lightblue",
      };
    }
    if (cond.includes("cloud")) {
      return {
        image:
          "https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?w=1000&auto=format&fit=crop&q=60",
        icon: <CloudIcon fontSize="large" />,
        color: "gray",
      };
    }
    if (cond.includes("clear")) {
      return {
        image:
          "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=1000&auto=format&fit=crop&q=60",
        icon: <WbSunnyIcon fontSize="large" />,
        color: "goldenrod",
      };
    }

    return {
      image:
        "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=1000&auto=format&fit=crop&q=60",
      icon: <CloudIcon fontSize="large" />,
      color: "darkgray",
    };
  };

  const { image, icon, color } = getWeatherDetails(weather.condition);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt={3}
      px={1}
      minHeight="50vh"
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 380,
          borderRadius: 3,
          boxShadow: 6,
          overflow: "hidden",
          background: "#fff",
          color: "#333",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height={{ xs: 120, sm: 150 }}
            image={image}
            alt={weather.condition}
            sx={{ objectFit: "cover" }}
          />

          <CardContent sx={{ padding: "12px 16px" }}>
            <Typography
              variant="h6"
              align="center"
              fontWeight="bold"
              sx={{ mb: 1, color, fontSize: { xs: "1rem", sm: "1.2rem" } }}
            >
              {/* {weather.condition} */}
            </Typography>

            <Typography
              variant="body1"
              align="center"
              sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" }, mb: 1 }}
            >
              {weather.city}, {weather.country}  
            </Typography>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={1}
              mb={1}
              sx={{ color }}
            >
              {icon}
              <Typography
                variant="body1"
                fontWeight="700"
                sx={{ fontSize: { xs: "1rem", sm: "1.1rem" } }}
              >
                {weather.condition}
              </Typography>
            </Box>

            <Typography
              variant="body2"
              align="center"
              sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
            >
              🌡️ Temp: {weather.temp} °C  
            </Typography>

            <Typography
              variant="body2"
              align="center"
              sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
            >
              💧 Humidity: {weather.humidity}% <br /> 📊 Pressure: {weather.pressure} hPa
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
