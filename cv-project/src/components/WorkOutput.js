import React, { Component } from 'react';

class WorkOutput extends Component {

    chooseEndDate = () => {
        return (this.props.state.endDate);
    }

    render() {
        return(
            <div class="pb-4">
                <h5 class="d-inline">{this.props.state.title}</h5>
                <div class="d-inline">
                    <div class="ml-5 pt-3 pb-3">
                        <p class="d-inline">{this.props.state.employer}</p>
                        <p class="d-inline pl-3 ml-3">{/*Address */}{this.props.state.city}, {this.props.state.state}</p>
                        <p class="d-inline float-right mr-5">{this.props.state.startDate} to {this.props.state.endDate}</p>
                    </div>
                </div>
                <b><p class="border-bottom">Responsibilities</p></b>
                <p class="ml-3 mt-1">{this.props.state.tasks.map(function(task) {
                    return <li>{task}</li>
                })}</p>
            </div>
        )
    }
}

export default WorkOutput;