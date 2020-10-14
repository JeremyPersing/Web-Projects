import React, {Component} from 'react';

class  EducationOutput extends Component{
    render() {
        return (
            <div id="education-output">
                <h3 class="text-center border-bottom pb-2e">Education</h3>
                <h5 class="ml-3 d-inline">{this.props.school}</h5>
                <div class="ml-5 pt-3 pb-3">
                    <p class="d-inline">{this.props.degree}</p>
                    <p class="d-inline float-right mr-5">{this.props.gpa}</p>
                </div>
                <p class="ml-3">{this.props.achievements.map(items => <li>{items}</li>)}</p>
            </div>
        )
    }    
}

export default EducationOutput;