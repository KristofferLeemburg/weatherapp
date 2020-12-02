import React, { useState } from 'react';
import './App.css';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import * as Icon from 'react-bootstrap-icons';

function WeatherDetail({ api, lat, lon }) {
  const [weather, setWeather] = useState({});

  
  async function oneCall() {
    fetch(`${api.base}onecall?lat=${lat}&lon=${lon}&appid=${api.key}&units=metric`)
      .then(response => response.json())
      .then(result => {
        setWeather(result);
        // setDayone(result.daily[0].dt) 
        // const tuesday = (new Date(result.daily[1].dt  * 1000))
        // console.log(time)
        // console.log(`${monday.getDate()}-${monday.getMonth()}-${monday.getFullYear()}`)
      }) 
    }
   
  const Icon1 = (picture) => {
    return picture = `http://openweathermap.org/img/wn/${weather.daily[0].weather[0].icon}.png`
  }
  const Icon2 = (picture) => {
    return picture = `http://openweathermap.org/img/wn/${weather.daily[1].weather[0].icon}.png`
  }
  const Icon3 = (picture) => {
    return picture = `http://openweathermap.org/img/wn/${weather.daily[2].weather[0].icon}.png`
  }
  const Icon4 = (picture) => {
    return picture = `http://openweathermap.org/img/wn/${weather.daily[3].weather[0].icon}.png`
  }
  const Icon5 = (picture) => {
    return picture = `http://openweathermap.org/img/wn/${weather.daily[4].weather[0].icon}.png`
  }
  const Icon6 = (picture) => {
    return picture = `http://openweathermap.org/img/wn/${weather.daily[5].weather[0].icon}.png`
  }
  const Icon7 = (picture) => {
    return picture = `http://openweathermap.org/img/wn/${weather.daily[6].weather[0].icon}.png`
  }
  // const decoratedOnClick = useAccordionToggle(eventKey, onClick);

  return (
<div>
    <Accordion>
      <Card >
        <Accordion.Toggle as={Card.Header} eventKey="0" onClick={oneCall} className="accordion">
          02-12-2020     
         
            <Icon.ArrowDownSquareFill className="icons" />
          
        </Accordion.Toggle >
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <p>max temp = {(typeof weather.daily != "undefined") ? (weather.daily[0].temp.max) : ""}</p>
            <p>min temp = {(typeof weather.daily != "undefined") ? (weather.daily[0].temp.min) : ""}</p>
            <p>day temp = {(typeof weather.daily != "undefined") ? (weather.daily[0].temp.day) : ""}</p>
            <p>eve temp = {(typeof weather.daily != "undefined") ? (weather.daily[0].temp.eve) : ""}</p>
            <p>night temp = {(typeof weather.daily != "undefined") ? (weather.daily[0].temp.night) : ""}</p>
            <p>{(typeof weather.daily != "undefined") ? (<img src={Icon1(Icon1)} alt="icon" />) : ""}</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1" className="accordion">
          03-12-2020   <Icon.ArrowDownSquareFill className="icons" />
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <p>max temp = {(typeof weather.daily != "undefined") ? (weather.daily[1].temp.max) : ""}</p>
            <p>min temp = {(typeof weather.daily != "undefined") ? (weather.daily[1].temp.min) : ""}</p>
            <p>day temp = {(typeof weather.daily != "undefined") ? (weather.daily[1].temp.day) : ""}</p>
            <p>eve temp = {(typeof weather.daily != "undefined") ? (weather.daily[1].temp.eve) : ""}</p>
            <p>night temp = {(typeof weather.daily != "undefined") ? (weather.daily[1].temp.night) : ""}</p>
            <p>{(typeof weather.daily != "undefined") ? (<img src={Icon2(Icon2)} alt="icon" />) : ""}</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="2" className="accordion">
          04-12-2020   <Icon.ArrowDownSquareFill style={{ float: "right" }} />
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <p>max temp = {(typeof weather.daily != "undefined") ? (weather.daily[2].temp.max) : ""}</p>
            <p>min temp = {(typeof weather.daily != "undefined") ? (weather.daily[2].temp.min) : ""}</p>
            <p>day temp = {(typeof weather.daily != "undefined") ? (weather.daily[2].temp.day) : ""}</p>
            <p>eve temp = {(typeof weather.daily != "undefined") ? (weather.daily[2].temp.eve) : ""}</p>
            <p>night temp = {(typeof weather.daily != "undefined") ? (weather.daily[2].temp.night) : ""}</p>
            <p>{(typeof weather.daily != "undefined") ? (<img src={Icon3(Icon3)} alt="icon" />) : ""}</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="3" className="accordion">
          05-12-2020   <Icon.ArrowDownSquareFill style={{ float: "right" }} />
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
            <p>max temp = {(typeof weather.daily != "undefined") ? (weather.daily[3].temp.max) : ""}</p>
            <p>min temp = {(typeof weather.daily != "undefined") ? (weather.daily[3].temp.min) : ""}</p>
            <p>day temp = {(typeof weather.daily != "undefined") ? (weather.daily[3].temp.day) : ""}</p>
            <p>eve temp = {(typeof weather.daily != "undefined") ? (weather.daily[3].temp.eve) : ""}</p>
            <p>night temp = {(typeof weather.daily != "undefined") ? (weather.daily[3].temp.night) : ""}</p>
            <p>{(typeof weather.daily != "undefined") ? (<img src={Icon4(Icon4)} alt="icon" />) : ""}</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="4" className="accordion">
          06-12-2020   <Icon.ArrowDownSquareFill style={{ float: "right" }} />
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="4">
          <Card.Body>
            <p>max temp = {(typeof weather.daily != "undefined") ? (weather.daily[4].temp.max) : ""}</p>
            <p>min temp = {(typeof weather.daily != "undefined") ? (weather.daily[4].temp.min) : ""}</p>
            <p>day temp = {(typeof weather.daily != "undefined") ? (weather.daily[4].temp.day) : ""}</p>
            <p>eve temp = {(typeof weather.daily != "undefined") ? (weather.daily[4].temp.eve) : ""}</p>
            <p>night temp = {(typeof weather.daily != "undefined") ? (weather.daily[4].temp.night) : ""}</p>
            <p>{(typeof weather.daily != "undefined") ? (<img src={Icon5(Icon5)} alt="icon" />) : ""}</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="5" className="accordion">
          07-12-2020   <Icon.ArrowDownSquareFill style={{ float: "right" }} />
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="5">
          <Card.Body>
            <p>max temp = {(typeof weather.daily != "undefined") ? (weather.daily[5].temp.max) : ""}</p>
            <p>min temp = {(typeof weather.daily != "undefined") ? (weather.daily[5].temp.min) : ""}</p>
            <p>day temp = {(typeof weather.daily != "undefined") ? (weather.daily[5].temp.day) : ""}</p>
            <p>eve temp = {(typeof weather.daily != "undefined") ? (weather.daily[5].temp.eve) : ""}</p>
            <p>night temp = {(typeof weather.daily != "undefined") ? (weather.daily[5].temp.night) : ""}</p>
            <p>{(typeof weather.daily != "undefined") ? (<img src={Icon6(Icon6)} alt="icon" />) : ""}</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="6" className="accordion">
          08-12-2020<Icon.ArrowDownSquareFill style={{ float: "right" }} />
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="6">
          <Card.Body>
            <p>max temp = {(typeof weather.daily != "undefined") ? (weather.daily[6].temp.max) : ""}</p>
            <p>min temp = {(typeof weather.daily != "undefined") ? (weather.daily[6].temp.min) : ""}</p>
            <p>day temp = {(typeof weather.daily != "undefined") ? (weather.daily[6].temp.day) : ""}</p>
            <p>eve temp = {(typeof weather.daily != "undefined") ? (weather.daily[6].temp.eve) : ""}</p>
            <p>night temp = {(typeof weather.daily != "undefined") ? (weather.daily[6].temp.night) : ""}</p>
            <p>{(typeof weather.daily != "undefined") ? (<img src={Icon7(Icon7)} alt="icon" />) : ""}</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>

    </div>
  );
}
export default WeatherDetail;