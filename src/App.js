import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isToggleOn : true
         };
         this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState((state) => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    render() {
        const {isToggleOn} = this.state;
        return (
           <button onClick = {this.handleClick}>
               {isToggleOn ? 'ON' : 'OFF'}
           </button>            
        );
    }
}

export default App;
