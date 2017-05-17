import React, { Component } from 'react';
import Input from './Input.js';
import api from '../utils/api.js';

export default class LocationInput extends Component {
    constructor(){
      super();
      this.state = {
        city: ''
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(name){
      this.setState({city:name});
      api.getWeather(this.state.city).then((response)=>{console.log(response)})

    }
    render() {
      return (
        <div>
          {this.state.city}
          <Input onSubmit={this.handleSubmit}/>

        </div>
      )
    }
  }
