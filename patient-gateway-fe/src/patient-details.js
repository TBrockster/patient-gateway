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
    const samples = this.props.samples;
    console.log(samples)
    var formatted_samples = samples.map((sample) =>
    <ul key={sample.id}> {sample.sampleType} | {sample.date} | {sample.quality} </ul>)
    return (
      <div className="input-panel">
      <div><span className="field-name">ID:</span><br/> {patient.id}</div>
      <div><span className="field-name">First Name:</span><br/> {patient.firstname}</div>
      <div><span className="field-name">Middle Initial:</span><br/> {patient.middleInitial}</div>
      <div><span className="field-name">Last Name:</span><br/> {patient.lastname}</div>
      <div><span className="field-name">Gender:</span><br/> {patient.gender}</div>
      <div><span className="field-name">Date of Birth:</span><br/> {patient.dateOfBirth}</div>
      <br/>
      <div><span className="field-name">Samples Below!</span><br/>{formatted_samples}</div>
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
      this.props.onDelete(patient.id);
    }
  }
}

export default PatientDetails;