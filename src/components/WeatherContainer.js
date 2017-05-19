import React, { Component } from 'react';
import queryString from 'query-string';
import Weather from './Weather'


export default class WeatherContainer extends Component{
    constructor(){
        super();
        this.state = {
            location: '',
            loading: true
        }
    }
    componentWillMount(){
        const parsed = queryString.parse(location.search);
        this.setState({
            location: parsed.city,
            loading:false
        })
    }
    render(){
        return (
            <div className='mobile-container'>
                <Weather  city={this.state.location} />
            </div>
        )
    }
}
