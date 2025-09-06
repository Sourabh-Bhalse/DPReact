 import React, { useState } from "react";

export default function Joker() {
  const [joke, setJoke] = useState(null);

  async function getNewJoke() {
    try {
      const res = await fetch("https://official-joke-api.appspot.com/random_joke");

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      console.log(data); // {id, type, setup, punchline}
      setJoke({ setup: data.setup, punchline: data.punchline });
    } catch (err) {
      console.error("Failed to fetch joke:", err);
    }
  }

  return (
    <div>
      <h1>Joker!!</h1>
      {joke ? (
        <>
          <h2>{joke.setup}</h2>
          <h2>{joke.punchline}</h2>
        </>
      ) : (
        <h2>Click below to get a joke!</h2>
      )}
      <button onClick={getNewJoke}>New Joke</button>
    </div>
  );
}
