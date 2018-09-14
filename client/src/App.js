import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    yo:[]
  }
  componentDidMount() {
    fetch('/hello')
      .then(res => res.json())
      .then(yo => this.setState({yo}))
  }
  render() {
    const yo =this.state.yo;
    console.log(yo);
    return (
      <div className="App">
        {yo.map( i => <li> {i.name}</li>)}
      </div>
    );
  }
}

export default App;
