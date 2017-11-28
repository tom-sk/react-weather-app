import React, { Component } from 'react';
import momentTZ from 'moment-timezone';


export default class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: ''
        }
    }
    componentWillMount(){
        this.setState({
          time: this.props.time
        });
    }
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    tick() {
      this.setState({
        time: this.props.time
      });
    }
    render(){
        return(
            <div>
                {momentTZ().tz(this.state.time).format("HH:mm")}
            </div>
        )
    }
}
