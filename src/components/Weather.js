import React, { Component } from 'react';
import axios from 'axios';
import api from '../utils/api.js';
import WeatherInformation from './WeatherInformation.js';
import Forecast from './Forecast.js';

export default class Weather extends Component {
    constructor(props){
        super(props);
        this.state = {
            weather: '',
            forecast: '',
            loading: true,
            tempCalc: true,
            locationTime:''
        }
        this.changeTemp = this.changeTemp.bind(this);
    }
    changeTemp(){
        this.setState({tempCalc: !this.state.tempCalc});
    }
    componentWillMount(){
        api.getWeather(this.props.city).then(axios.spread((current, five)=>{
                this.setState({
                    weather: current,
                    forecast: five
                })
            })
        ).then(()=>{
            return api.getTimeLocation(this.state.weather.data.coord.lat,this.state.weather.data.coord.lon)
                .then((response)=>{this.setState({
                    locationTime: response,
                    loading: false
                }
            )});
        });
    }
    render() {
        var {loading, weather, forecast, tempCalc, locationTime} = this.state;

        return (
            <div className="weather-container">
                {!loading ?
                    <WeatherInformation
                        location={locationTime}
                        weather={weather}
                        tempCalc={tempCalc}
                        changeTemp={this.changeTemp}/> :
                    <p>Loading...</p>}


                <div className='forecast-container'>
                    {!loading ?
                        forecast.data.list.filter((el,i)=>(i > 0 ? el : '' )).map((listItem, index)=>{
                            return <Forecast key={index} forecast={listItem} tempCalc={tempCalc}/>
                    }) : ''}
                </div>


            </div>
        );
    }
}
