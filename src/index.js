import React from 'react';
import ReactDOM from 'react-dom';

//functional component : 

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}
const element = <Welcome name = "Vishnu"/>
ReactDOM.render(
   element
    , document.getElementById("root"));