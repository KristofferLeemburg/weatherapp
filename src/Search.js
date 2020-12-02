import React from 'react';
import './App.css';
require('dotenv').config()

function Search({ randomNumber, api, query, setQuery, setError, error, setWeather, setLat, setLong, setBgpicture, setTime }) {
    
    function search(evt) {
        if (evt.key === "Enter") {
            const num = process.env.REACT_APP_API_KEY_2;
            const n = num.toString();
            async function renderWeather() {
                fetch(`${api.base}weather?q=${query}&APPID=${api.key}&units=metric`)
                    .then(response => response.json())
                    .then(result => {
                        if (query.length === 0) {
                            return setError(true);
                        }
                        if (result.cod !== 200) {
                            throw new Error();
                        }
                        setTime(result.dt);
                        setWeather(result);
                        setQuery("");
                        setLat(result.coord.lat);
                        setLong(result.coord.lon);
                    })
                    .catch(err => {
                        setError(true);
                        console.log(err.message);
                        console.log(error);
                    });
            } 
            renderWeather();
            // console.log(randomNumber)
            function renderPictures() {
                fetch(`https://api.pexels.com/v1/search?query=${query}`, {
                    headers: {
                        Authorization : n,
                    }
                })
                    .then(response => response.json())
                    .then(result => {
                        setBgpicture(result.photos[randomNumber].src.large);
                        // console.log(result.photos[randomNumber].src.large)
                    })
                    .catch(err => console.log(err));
            }
            renderPictures();
        }
    }
        return (
            <div className="search-box">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search for a city..."
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={search}
                />
            </div>
        );
    }
export default Search;