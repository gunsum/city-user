import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [city, setCity] = useState([]);
  const fetchPost = async () => {
    const response = await fetch("http://localhost:5000/");
    const data = await response.json();
    setCity(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="App">
      <h2>{city}</h2>
    </div>
  );
}

export default App;
