import React, { Component } from 'react';
import './App.css';

class PatientDetails extends Component {

  constructor(props) {
    super(props);
    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  render() {
    const patient = this.props.patient;
    return (
      <div className="input-panel">
      {/* <span className="form-caption">{ patient.firstname}</span> */}
      <div><span className="field-name">First Name:</span><br/> {patient.firstname}</div>
      <div><span className="field-name">Middle Initial:</span><br/> {patient.middleInitial}</div>
      <div><span className="field-name">Last Name:</span><br/> {patient.lastname}</div>
      <div><span className="field-name">Gender:</span><br/> {patient.gender}</div>
      <div><span className="field-name">Date of Birth:</span><br/> {patient.dateOfBirth}</div>
      <br/>
      <button onClick={() => this.onEdit()}>Edit</button>
      <button onClick={() => this.onDelete()}>Delete</button> 
      </div>
    );
  }

  onEdit() {
    this.props.onEdit();
  }

  onDelete() {
    const patient = this.props.patient;
    if(window.confirm('Are you sure you want to delete this patient?')) {
      this.props.onDelete(patient.link);
    }
  }
}

export default PatientDetails;