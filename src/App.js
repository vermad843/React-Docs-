import React, { Component } from 'react';

class App extends Component {

    handleClick() {
        console.log('Clicked!!!')
    }
       render() {
           return (
               <div className = "App">
                  <button onClick= {this.handleClick}>Click Me!!</button>
               </div>
           );
       }
   }

export default App;