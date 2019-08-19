import React, { Component } from 'react';

class Restaurants extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1 onClick={(e) => this.props.consoleLogText(e.target.textContent)}>Restaurant: {this.props.restaurant}</h1>
            </div>
        )
    }
}

export default Restaurants;