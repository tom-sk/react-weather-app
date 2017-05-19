import React, { Component } from 'react';
import api from '../utils/api.js';
import {Link} from 'react-router-dom';

export default class GeoLocation extends Component {
    constructor(){
      super();
      this.state = {
        city: ''
      }

    }
    componentWillMount(){
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position)=>{
              
              api.getGeoLocation(position.coords.latitude, position.coords.longitude).then((response)=>{
                  this.setState({
                      city:response.data.results[0].address_components[4].long_name
                  })
                //   console.log(response.data.results[0].address_components[4].long_name)
              });

          })
        }
        else {
          console.log('Geolocation is not supported for this Browser/OS.');
        }


    }
    render() {
      return (
        <div >
            <Link className='geolocation-button' to={{
                pathname:'/weather',
                search: '?city=' + this.state.city}} type='sumbit'>
                    <i className="fa fa-crosshairs" aria-hidden="true"></i>
                </Link>
        </div>
      )
    }
  }
