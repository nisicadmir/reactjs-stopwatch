import React, {Component} from 'react';

// import Stopwatch from './Stopwatch';
import './App.css';


class App extends Component {
  
  constructor(){
    super();
    this.state = {
      time: '00:00',
      timeout: null,
      minutes: 0,
      seconds: 0,
      startButton: true,
    };
  }
  
  setTime(){
    const time = this.refs.minutes.value + ':' + this.refs.seconds.value
    this.setState({
      time: time,
      minutes: this.refs.minutes.value,
      seconds: this.refs.seconds.value
    });
    
    if(this.refs.minutes.value <= 0 && this.refs.seconds.value <= 0){
      alert('Enter valid parameters!!!')
    }else{
      this.setState({
        startButton: false
      })
    }
  }
  
  startStopwatch(){
    
    const timeout = new Date();
    timeout.setMinutes(timeout.getMinutes() + parseInt(this.state.minutes));
    timeout.setSeconds(timeout.getSeconds() + parseInt(this.state.seconds));
    
    this.setState({
      timeout: timeout,
      startButton: true,
    });
    
    this.refs.minutes.value = 0;
    this.refs.seconds.value = 0;
    
    var myInterval = setInterval(() => this.calculate(myInterval), 1000);
  }
  
  calculate(myInterval){
    const time = Date.parse(this.state.timeout) - Date.parse(new Date());
    const seconds = Math.floor((time/1000)%60);
    const minutes = Math.floor((time/1000/60)%60);
    
    if(minutes >= 0 && seconds >=0){
      this.setState({
        minutes: minutes,
        seconds: seconds
      });
    }else{
      clearInterval(myInterval);
      alert('STOPWATCH ENDS');
    }
  }

  
  render(){
    return(
      <div className="app">
        <h2>STOPWATCH</h2>
        <h2>Time is set to: {this.state.time}</h2>
        <h3> Stopwatch: {this.state.minutes}:{this.state.seconds}</h3>
        <input ref="minutes" placeholder="minutes" type="number" min="0" max="60" step="1" defaultValue="0"/>
        <input ref="seconds" placeholder="seconds" type="number" min="0" max="60" step="1" defaultValue="0"/>
        <button onClick={() => this.setTime()}>Set time</button>
        <button disabled={this.state.startButton} onClick={() => this.startStopwatch()}>START</button>
      </div>
    )
  }

}

export default App;