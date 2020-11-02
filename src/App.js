import React, { Fragment, Component } from "react";
import "./App.css";
import SearchBar from "./Components/Layouts/SearchBar";
import Header from "./Components/Layouts/Header";
import Result from "./Components/weatherData/Result";
import axios from "axios";
import Loader from "./Components/Layouts/Loader";
import Error from "./Components/Layouts/Error";

require("dotenv").config();

let OWMKEY;
if (process.env.NODE_ENV !== "production") {
  OWMKEY = process.env.REACT_APP_WEATHER_API_KEY;
} else {
  OWMKEY = process.env.WEATHER_API_KEY;
}

class App extends Component {
  state = {
    value: "",
    weatherInfo: null,
    error: false,
    fetching: false,
    degreetype: "celsius",
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  
  
  SearchCity = async (e) => {
    e.preventDefault();
    const { value } = this.state;
    this.setState({ fetching: true, weatherInfo: null, error: false });

    console.log(OWMKEY);
    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=${OWMKEY}&units=metric`;
    const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&APPID=${OWMKEY}&units=metric`;

    try {
      const { data } = await axios.get(weather);
      const res = await axios.get(forecast);
      const data1 = res.data;

      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "Nocvember",
        "December",
      ];
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const currentdate = new Date();

      const date = `${days[currentdate.getDay()]}, ${currentdate.getDate()} ${
        months[currentdate.getMonth()]
      } `;

      const sunrise = new Date(data.sys.sunrise * 1000)
        .toLocaleTimeString()
        .slice(0, 4);
      const sunset = new Date(data.sys.sunset * 1000)
        .toLocaleTimeString()
        .slice(0, 4);
      const weatherInfo = {
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        main: data.weather[0].main,
        temp: data.main.temp,
        icon: data.weather[0].icon,
        date,
        sunrise,
        sunset,
        lowTemp: data.main.temp_min,
        highTemp: data.main.temp_max,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        forecast: data1.list,
      };

      setTimeout(() => {
        this.setState({ weatherInfo, fetching: false });
      }, 5000);
    } catch (error) {
      console.log("city not found");
      this.setState({
        error: true,
        fetching: false,
      });
    }
  };

  updateDegree = (e) => {
    this.setState({
      degreetype: e.target.value,
    });
  };

  render() {
    const { value, weatherInfo, error, fetching, degreetype } = this.state;

    return (
      <Fragment>
        <Header />
        <div className="container">
          <h1 className="pt-3 title fadeIn">WEATHER FORECAST</h1>

          <SearchBar
            submit={this.SearchCity}
            value={value}
            change={this.handleInputChange}
          />
        </div>
        <div className="container">
          {fetching && <Loader value={value} />}
          {weatherInfo && (
            <Result
              weatherInfo={weatherInfo}
              error={error}
              degreetype={degreetype}
              updateDegree={this.updateDegree}
            />
          )}
          {error && <Error />}
        </div>
      </Fragment>
    );
  }
}

export default App;
