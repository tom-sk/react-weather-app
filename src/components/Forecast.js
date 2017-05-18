import React, { Component } from 'react';
import moment from 'moment';


export default class WeatherInformation extends Component {
    render() {
        var time = parseInt(this.props.forecast.dt, 10);
        var day = moment.unix(time).format('ddd');
        var icon = this.props.forecast.weather[0].icon;

        return (
            <div className="forecast-info">
                <div>{day}</div>

                {this.props.tempCalc ?
                    <div>{Math.floor(this.props.forecast.temp.day - 273.15) }°C</div> :
                    <div>{Math.floor(((this.props.forecast.temp.day - 273.15) * 9/5)  + 32)}°F</div> }

                <img src={require('../images/weather-icons/' + icon + '.svg')} alt=""/>
            </div>
        );
    }
}
