import React, {Component} from 'react';


class Stopwatch extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      minutes: 0,
      seconds: 0
    }
  }
  
  componentWillMount(){
    // const minutes = this.props.minutes;
    // const seconds = this.props.seconds;
  }
  
  componentDidMount(){
    const minutes = this.props.minutes;
    const seconds = this.props.seconds;
    setInterval(() => this.setStopwatchTime(minutes, seconds), 1000);
  }
  
  setStopwatchTime(m, s){
    this.setState({
      minutes: m,
      seconds: s
    })
  }
  
  getTimeUntil(m, s){
    // const timeout = Date.now() + m*s*1000;
    // const timeOutSeconds = Math.floor((timeout/1000/60)%60);
    // const timeNowSeconds = Math.floor((Date.now()/1000/60)%60);
    // const timeLeft = timeOutSeconds - timeNowSeconds;
    // // const timeLeft = timeOutSeconds - timeNowSeconds;
    // console.log('timeleft', timeLeft);
    // // const minutes = this.props.minutes;
    // // const seconds = this.props.seconds;
    // // this.setStopwatchTime(minutes, seconds);
  }
  
  render(){
    return(
      <div>
        Time: {this.state.minutes}:{this.state.seconds}
      </div>
  )}

}

export default Stopwatch;