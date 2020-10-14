import React, {Component} from 'react';
import WorkOutput from './WorkOutput';

class Work extends Component {
    constructor() {
        super();

        this.work = [];

        this.state = {
            title: '',
            startDate: '',
            endDate: '',
            tasks: [],
            employer: '',
            city: '',
            state: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleAdd = (e) => {
        document.getElementById('work-history').className = "d-block text-center border-bottom pb-2"; 
        this.work.push(<WorkOutput state={this.state}></WorkOutput>); //push a WorkOutput object into this.work
        e.preventDefault(); //preventDefault prevents the page from completely refreshing on the click of the button
        this.forceUpdate(); //force an update to the DOM, otherwise this.work will not render
    }

    handleDone = (e) => {
        e.preventDefault();
        document.getElementById('work-form').className = "d-none";
    }

    handleCurrentEmployment = (e) => {
        if(document.getElementById('checkBox').checked === true) { 
            document.getElementById('checkBox').value = "Current"; 
            console.log(e.target.value);
        }
        else {
            document.getElementById('checkBox').value = false;
        }
        this.setState({
            endDate : e.target.value,
        });
    }

    handleTextArea = (e) => {
        let input = e.target.value;
        let inputArr = input.split('.');
        this.setState({
            [e.target.name]: inputArr,
        })
        console.log(this.state.achievements)
    }

    render() {
        return(
            <div>
                <h3 class="d-none" id="work-history">Work History</h3>
                <div id="work-output">
                    {this.work}
                </div>
                <form id="work-form" class="p-3 border mb-3">
                    <div class="form-group">
                        <label for="jobTitleInput">Job Title</label>
                        <input 
                            type="text" 
                            name="title" 
                            id="jobTitleInput" 
                            class="form-control"
                            onChange={this.handleChange}>
                        </input>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-5">
                            <label for="startDateInput">Start Date</label>
                            <input 
                                type="date" 
                                id="startDateInput" 
                                class="form-control" 
                                name="startDate"
                                onChange={this.handleChange}>
                            </input>
                        </div>
                        <div class="form-group col-md-5">
                            <label for="endDateInput">End Date</label>
                            <input 
                                type="date" 
                                name="endDate" 
                                class="form-control" 
                                id="endDateInput"
                                onChange={this.handleChange}>
                            </input>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="currentJob">Still Working</label>
                            <input 
                                type="checkbox"
                                id="checkBox"
                                class="form-control" 
                                name="stillWorking" 
                                value="false"
                                onClick={this.handleCurrentEmployment}>
                            </input>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="jobTaskInput">Tasks</label>
                        <textarea 
                            type="text" 
                            name="tasks" 
                            id="jobTaskInput" 
                            class="form-control"
                            onChange={this.handleTextArea}
                            placeholder="Enter full sentences, but leave off the last period (otherwise an unwanted bullet point will appear)">
                        </textarea>
                    </div>
                    <div class="form-group">
                        <label for="employerInput">Employer</label>
                        <input 
                            type="text" 
                            name="employer" 
                            id="employerInput" 
                            class="form-control"
                            onChange={this.handleChange}>
                        </input>
                    </div>
                    <div class="form-group">
                            <label for="jobAddress">Address</label>
                            <input 
                                type="text" 
                                name="employerAddress" 
                                id="jobAddress" 
                                class="form-control"
                                onChange={this.handleChange}>
                            </input>
                        </div>
                    <div class="form-row">
                        <div class="form-group col-md-7">
                            <label for="jobCity">City</label>
                            <input 
                                type="text" 
                                name="city" 
                                id="jobCity" 
                                class="form-control"
                                onChange={this.handleChange}>
                            </input>
                        </div>
                        <div class="form-group col-md-5">
                            <label for="jobState">State</label>
                            <select id="jobState" name="state" class="form-control" onChange={this.handleChange}>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                        </div>
                    </div>
                    <div class="text-center mt-3">
                        <button class="btn btn-primary mr-5" onClick={this.handleAdd}>Add</button>
                        <button class="btn btn-primary ml-5" onClick={this.handleDone}>Done</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Work;