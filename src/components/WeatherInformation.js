import React, { Component } from 'react';
import Clock from './Clock.js';

export default class WeatherInformation extends Component {
    constructor(){
        super();
        this.state = {
            location: ''
        }
    }
    componentWillMount(){
        this.setState({location: this.props.location})

    }
    render() {
        var {location} = this.state;
        var icon = this.props.weather.data.weather[0].icon;
        return (
            <div className="weather-info">


                <div>{this.props.weather.data.name}</div>
                <Clock time={location.data.timeZoneId} />
                <div>{this.props.weather.data.weather[0].main}</div>
                <div><img src={require('../images/weather-icons/' + icon + '.svg')} alt=""/></div>

                {this.props.tempCalc ?
                    <div>{Math.floor(this.props.weather.data.main.temp - 273.15) }°C</div> :
                    <div>{Math.floor(((this.props.weather.data.main.temp - 273.15) * 9/5)  + 32)}°F</div> }

                <button onClick={this.props.changeTemp}> {this.props.tempCalc ? '°C' : '°F'} </button>

                <div>Humidity: {this.props.weather.data.main.humidity}%</div>
                <div>Wind Speed: {this.props.weather.data.wind.speed}Mph</div>
            </div>
        );
    }
}
