import React, { Component } from 'react';



class FormattedDate extends Component {
    render() {
        return (
            <h1>It is{this.props.date.toLocaleTimeString()} </h1>            
        );
    }
}

export default FormattedDate;