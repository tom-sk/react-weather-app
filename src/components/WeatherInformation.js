import React, { Component } from 'react';
import Clock from './Clock.js';
import {Link} from 'react-router-dom';

export default class WeatherInformation extends Component {
    constructor(){
        super();
        this.state = {
            location: ''
        }
    }
    componentWillMount(){
        this.setState({location: this.props.location})
        console.log(this.props.weather.data.sys.country);
    }
    render() {
        var {location} = this.state;
        var icon = this.props.weather.data.weather[0].icon;
        return (
            <div className="weather-info">
                <Link to='/' type='sumbit'><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>


                <div className='location-name'>{this.props.weather.data.name}, {this.props.weather.data.sys.country}</div>
                <Clock time={location.data.timeZoneId} />
                <div className='main-weather-icon' ><img src={require('../images/weather-icons/' + icon + '.svg')} alt=""/></div>
                <div>{this.props.weather.data.weather[0].main}</div>


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
