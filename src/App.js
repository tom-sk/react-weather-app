import React, { Component } from 'react';
import './App.css';
import LocationInput from './components/LocationInput.js';
import WeatherContainer from './components/WeatherContainer.js';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {
    render() {
      return (

        <Router>
            <div>
            {/* <img src={require('./image.jpg')} alt=""/> */}

                <Route exact path="/" component={LocationInput}/>
                <Route exact path="/weather" component={WeatherContainer}/>
            </div>
        </Router>
        );
    }
}

export default App;
