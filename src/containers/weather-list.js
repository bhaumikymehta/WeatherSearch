import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';


class WeatherList extends Component {
  renderWeather(cityData){
    const name= cityData.city.name;
    const temps= cityData.list.map((weather) => {
      return (9/5*(weather.main.temp-273)+32);
    });
    const pressure= cityData.list.map(weather => weather.main.pressure );
    const humidity= cityData.list.map(weather => weather.main.humidity );
    const { lon, lat}= cityData.city.coord;

    console.log(temps);

    return (
        <tr key={name}>
          <td><GoogleMap lon={lon} lat={lat} /><span className="city-name">{name}</span></td>
          <td>
            <Chart data= {temps} color="orange" units="F" />
          </td>
          <td>
            <Chart data= {pressure} color="green" units="hPa" />
          </td>
          <td>
            <Chart data= {humidity} color="black" units="%"/>
          </td>

        </tr>
    );
  }

  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>CITY</th>
            <th>TEMPERATE</th>
            <th>PRESSURE</th>
            <th>HUMIDITY</th>

          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}

        </tbody>
      </table>
    );
  }
}
//
function mapStateToProps({weather}) {
  return {weather};//other es6 synatax is {weather : state.weather } which will do the same
}

export default connect(mapStateToProps)(WeatherList);
