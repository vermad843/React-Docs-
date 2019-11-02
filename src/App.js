import React, { Component } from 'react';
import FormattedDate from './FormattedDate';



class App extends Component {
    constructor() {
     super();
     this.state = {
         date : new Date()
     }
    }
    render() {
        return (
           <div>
              <FormattedDate date = {this.state.date}/>
           </div>  
        );
    }
}

export default App;