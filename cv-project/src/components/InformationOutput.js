import React, { Component } from 'react';

class InformationOutput extends Component {
    render() {
        return(
            <div class="text-center pt-4 mb-4 border-bottom">
                <h1 className="text-center mr-5">{this.props.state.name}</h1>
                <p class="d-inline mr-5">{ this.props.state.email }</p>
                <p class="d-inline mr-5">{ this.props.state.phone }</p>
                <p class="d-inline">{ this.props.state.address }, 
                   { ' ' + this.props.state.city }
                   { ' ' + this.props.state.state }
                   { ' ' + this.props.state.zip }</p>
            </div>
        )
    }
}

export default InformationOutput;