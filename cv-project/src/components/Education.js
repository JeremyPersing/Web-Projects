import React, {Component} from 'react';
import EducationOutput from './EducationOutput';

class Education extends Component {
    constructor() {
        super();

        this.state = {
            school: '',
            degree: '',
            gpa: '',
            achievements: [],
        }
    }

    handleSchool = (e) => {
        this.setState({
            school: e.target.value,
        })
        console.log(this.state.school)
    }

    handleDegree = (e) => {
        this.setState({
            degree: e.target.value,
        })
        console.log(this.state.degree);
    }

    handleGPA = (e) => {
        let gradePoint = '';
        if (this.state.gpa === '') {
            gradePoint = e.target.value + ' GPA';
        }
        
        this.setState({
            gpa: gradePoint,
        })
    }

    handleAchievements = (e) => {
        let inputValue = e.target.value;
        let inputArr = inputValue.split('.');
        console.log(inputArr);
        this.setState({
            achievements: inputArr,
        })
        
    }

    handleClick = (e) => {
        // setting the elements to visible
        e.preventDefault();
        document.getElementById('educationForm').className = 'd-none';
        document.getElementById('education-output').className = 'd-block';
    } 


    render() {
        return( 
            <div id="education">
                <form id="educationForm" class="p-3 mb-3 border">
                    <div class="form-group">
                        <label for="school">School</label>
                        <input type="text" class="form-control" id="school" onChange={this.handleSchool} placeholder="California State University, Sacramento"></input>
                    </div>
                    <div class="form-row">
                       <div class="form-group col-md-10">
                            <label for="degree">Degree</label>
                            <input type="text" id="degree" onChange={this.handleDegree} class="form-control" placeholder="Computer Science, B.S."></input>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="gpa">GPA</label>
                            <input type="text" class="form-control" onChange={this.handleGPA} id="gpa" placeholder="3.0"></input>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="achievements">Achievements</label>
                        <textarea class="form-control" name="achievements" onChange={this.handleAchievements} id="achievements"
                        placeholder="Enter full sentences, but leave off the last period (otherwise an unwanted bullet point will appear)"></textarea>
                    </div>
                    <div class="text-center mt-3">
                        <button class="btn btn-primary" onClick={this.handleClick} type="submit">Submit</button>
                    </div>
                </form>
                <div id="education-output" class="d-none">
                    <EducationOutput school={this.state.school} degree={this.state.degree} gpa={this.state.gpa} achievements={this.state.achievements} />
                </div>
            </div>
        )
    }
}

export default Education;