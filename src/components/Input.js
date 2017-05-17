import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Input extends Component {
  constructor(props){
    super(props);
    this.state = {
      city: ''
    }
    this.handleSumbit = this.handleSumbit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    var val = event.target.value;
    this.setState({city:val});
  }
  handleSumbit(event){
    event.preventDefault();

    this.props.onSubmit(this.state.city);
  }
  render(){
    return(
      <form onSubmit={this.handleSumbit}>
        <label htmlFor='city'>
          Label
        </label>
        <input id='city' value={this.state.city} onChange={this.handleChange}/>
        <Link to={{
            pathname:'/test',
            search: '?city=' + this.state.city}} type='sumbit'>Sumbit</Link>
      </form>
    )
  }
}
