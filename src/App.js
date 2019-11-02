import React, { Component } from 'react';
import Welcome from './Welcome';
import './App.css';


//class based  component : 
class App extends Component {
    render() {
      return (
      <h1> <Welcome name = "Vishnu"/></h1>
      );
    }
  }
  
  export default App;