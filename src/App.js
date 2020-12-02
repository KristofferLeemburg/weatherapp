import React, { useState } from 'react';
import './App.css';
import WeatherDetail from './WeatherDetail'
import Search from './Search'

function App() {
  const api = {
    "key": process.env.REACT_APP_API_KEY,
    base: "https://api.openweathermap.org/data/2.5/"
}

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [lat, setLat] = useState("");
  const [lon, setLong] = useState("");
  const [bgpicture, setBgpicture] = useState("")
  const [time, setTime] = useState("")
  const [error, setError] = useState(false);

  function getRandomInt() {
    return Math.floor(Math.random() * 8);
  }
const randomNumber = getRandomInt(8)

  

  const Dates = (d) => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const maanden = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const day = days[d.getDay() - 1];
    const dates = d.getDate();
    const month = maanden[d.getMonth()];
    const year = d.getFullYear();
    return `${day} ${dates} ${month} ${year}`;
  };
  const Icon = () => {
    return `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`
  };
  // async function times() {
  //   const tuesday = (new Date(time * 1000))
  //   console.log(`${tuesday.getDate()}-${tuesday.getMonth()}-${tuesday.getFullYear()}`)
  // }times()
  return (
    <div>
      <div style={{
        backgroundImage: `url(${bgpicture})`, backgroundPosition: 'center', boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.5)",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        <main>
          <Search randomNumber={randomNumber} api={api} setQuery={setQuery} query={query} setError={setError} error={error} setWeather={setWeather} setLat={setLat} setLong={setLong} setBgpicture={setBgpicture} setTime={setTime} />
          {(typeof weather.main != "undefined") ? (
            <div>
              <div className="location-box">
                <div className="location">{weather.name}, {weather.sys.country}</div>
              </div>
              <div className="weather-box">
                <div className="weather">{weather.weather[0].main}</div>
                <div className="container-icon"><img src={Icon(Icon)} alt="icon" className="icon" /></div>
                <div className="temp">{Math.round(weather.main.temp)}°</div>
              </div>
              <div className="date">{Dates(new Date())}</div>
            </div>
          ) : ('')}
        </main>
      </div>
      <WeatherDetail api={api} lat={lat} lon={lon} time={time}  />
    </div>
  );
}
export default App;