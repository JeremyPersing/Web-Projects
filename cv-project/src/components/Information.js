import React, { Component } from 'react';
import InformationOutput from './InformationOutput';

class Information extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            zip: '',
        }

    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
        
    }


    formatNumber = (str) => {
        let cleaned = ('' + str).replace(/\D/g, '');
        
        let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

        if (match) {
            return '(' + match[1] + ') ' +  match[2] + '-' + match[3];
        };

        return 'Invalid Phone Number';
    };

    handlePhoneChange = (e) => {
        let phoneNumber = this.formatNumber(e.target.value);
        this.setState({
            phone: phoneNumber,
        })

    }

    appendInformationOutput = (e) => {
        e.preventDefault();
        console.log(this.state);
        document.getElementById('title').remove();
        document.getElementById('informationForm').remove();
        document.getElementById('information-output').className = "d-block";
    }

    render() {
        return(
            <div class="information">
                <form className="p-3 mb-3 mt-2 border" id="informationForm">
                    <div class="form-group">
                    <label for="nameInput">Name</label>
                    <input type="text" name="name" class="form-control" id="nameInput" placeholder="John Doe" onChange={this.handleInputChange}></input>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-8">
                            <label for="emailInput">Email</label>
                            <input type="email" name="email" class="form-control" id="emailInput" placeholder="You@whatever.com" onChange={this.handleInputChange}></input>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="phoneInput">Phone</label>
                            <input type="text" name="telephone" class="form-control" id="phoneInput" placeholder="1234560000" onChange={this.handlePhoneChange}></input>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="addressInput">Address</label>
                        <input type="type" name="address" class="form-control" id="addressInput" placeholder="123 Avenue Way" onChange={this.handleInputChange}></input>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-7">
                            <label for="cityInput">City</label>
                            <input type="text" name="city" class="form-control" onChange={this.handleInputChange}></input>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="stateInput">State</label>
                            <select id="stateInput" name="state" class="form-control" onChange={this.handleInputChange}>
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
                        <div class="form-group col-md-2">
                            <label for="zipInput">ZIP</label>
                            <input type="text" name="zip" id="zipInput" class="form-control" onChange={this.handleInputChange}></input> 
                        </div>
                    </div>
                    <div class="text-center mt-3">
                        <button class="btn btn-primary" type="button" onClick={this.appendInformationOutput}>Submit</button>
                    </div>
                </form>
                <div id="information-output" class="d-none">
                    <InformationOutput state={this.state} />
                </div>
            </div>
        )
    }
}

export default Information;