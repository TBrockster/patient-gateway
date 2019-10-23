import React, { Component } from 'react';
import './App.css';
import Validator from './shared/validator';

class NewPatient extends Component {

  constructor(props) {
    super(props);
    this.validator = new Validator();
    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      firstname: '',
      middleInitial: '',
      lastname: '',
      gender: '',
      dateOfBirth: ''
    };
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onCancel() {
    this.props.onCancel();
  }

  onSubmit() {
    if (this.validator.validateInputs(this.state)) {
      this.props.onSubmit(this.state);
    }
  }

  render() {
    return (
      <div className="input-panel">
      <span className="form-caption">New Patient:</span>
      <div>
        <label className="field-name">First Name:<br/>
          <input value={this.state.firstname} name="firstname" maxLength="255" required onChange={this.handleInputChange} placeholder="First Name" />
        </label>
      </div>
      <div>
        <label className="field-name">Middle Initial:<br/>
          <input value={this.state.middleInitial} name="middleInitial" maxLength="255" required onChange={this.handleInputChange} placeholder="Middle Initial" />
        </label>
      </div>
      <div>
        <label className="field-name">Last Name:<br/>
          <input value={this.state.lastname} name="lastname" maxLength="255" required onChange={this.handleInputChange} placeholder="Last Name" />
        </label>
      </div>
      <div>
        <label className="field-name">Gender:<br/>
          <input value={this.state.gender} name="gender" maxLength="255" required onChange={this.handleInputChange} placeholder="Gender" />
        </label>
      </div>
      <div>
        <label className="field-name">Date of Birth:<br/>
          <input value={this.state.dateOfBirth} name="dateOfBirth" maxLength="255" required onChange={this.handleInputChange} placeholder="Date of Birth" />
        </label>
      </div>
      <br/>
      <button onClick={() => this.onSubmit()}>Create</button>
      <button onClick={() => this.onCancel()}>Cancel</button> 
      </div>
    );
  }
}

export default NewPatient;