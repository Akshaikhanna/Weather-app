import { useState } from 'react';
import './App.css';

const api = {
  key: "fbaddbf6a268c149d79b328a1b7967c1",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result)=>{
      setWeather(result);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1>Weather</h1>
      <input type="text" placeholder="Enter the city" className="box" onChange={(e) => setSearch(e.target.value)} />
      <button className="btn1" onClick={handleSubmit} >Search</button>
      {typeof weather.main != "undefined" ? (
        <div>
      <p>{weather.name}</p>
      <p>{weather.main.temp}°C</p>
      <p>{weather.weather[0].main}</p>
      </div>
    ):(
      ""
    )}
    </header>
    </div>
  );
}

export default App;