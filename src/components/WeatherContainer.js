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
    componentDidMount(){
        const parsed = queryString.parse(location.search);
        this.setState({
            location: parsed.city,
            loading:false
        })
    }
    render(){
        return (
            <div>

                {!this.state.loading ? <Weather city={this.state.location} /> : '<p>Loadig...</p>'}

            </div>
        )
    }
}
