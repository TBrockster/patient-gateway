import React, { Component } from 'react';
import './App.css';
import PatientDetails from './patient-details';
import NewPatient from './new-patient';
import EditPatient from './edit-patient';
import PatientData from './shared/patient-data';
import SampleData from './shared/sample-data';

class App extends Component {

  constructor(props) {
    super(props);
    this.patientData = new PatientData();
    this.sampleData = new SampleData();
    this.patientSamples = this.patientSamples.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onNewPatient = this.onNewPatient.bind(this);
    this.onEditPatient = this.onEditPatient.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onCancelEdit = this.onCancelEdit.bind(this);
    this.onCreatePatient = this.onCreatePatient.bind(this);
    this.onUpdatePatient = this.onUpdatePatient.bind(this);
    this.onDeletePatient = this.onDeletePatient.bind(this);
    this.state = {
      showDetails: false,
      editPatient: false,
      selectedPatient: null,
      newPatient: null,
      selectedPatientSamples: null
    }
  }

  componentDidMount() {
    this.getPatients();
    this.getSamples();
  }

  render() {
    const patients = this.state.patients;
    if(!patients) return null;
    const showDetails = this.state.showDetails;
    const selectedPatient = this.state.selectedPatient;
    const selectedPatientSamples = this.state.selectedPatientSamples;
    const newPatient = this.state.newPatient;
    const editPatient = this.state.editPatient;
    const listPatients = patients.map((patient) =>
      <ul key={patient.id} onClick={() => this.onSelect(patient.id)}>
            <span className="patient-name" >{patient.firstname + ' ' + patient.lastname} </span>
      </ul>
    );

    return (
      <div className="App">
          <ul className="patients">
            {listPatients}
          </ul>
          <br/>
            <button type="button" name="button" onClick={() => this.onNewPatient()}>New Patient</button>
          <br/>
            {newPatient && <NewPatient onSubmit={this.onCreatePatient} onCancel={this.onCancel}/>}
            {showDetails && selectedPatient && <PatientDetails patient={selectedPatient} samples={selectedPatientSamples} onEdit={this.onEditPatient}  onDelete={this.onDeletePatient}/>}
            {editPatient && selectedPatient && <EditPatient onSubmit={this.onUpdatePatient} onCancel={this.onCancelEdit} patient={selectedPatient} />}
      </div>
    );
  }

  getPatients() {
    this.patientData.retrievePatients().then(patients => {
      this.setState({
        patients: patients
      });
    });
  }

  getSamples() {
    this.sampleData.retrieveSamples().then(samples => {
      this.setState({
        samples: samples
      });
    });
  }

  patientSamples(patientId) {
    var result = []
    this.state.samples.map(function (sample) {
      if (sample.patientId === patientId) {
        result.push(sample);
      }
    })
    return result
  }

  onSelect(patientId) {
    this.clearState();
    this.patientData.getPatient(patientId).then(patient => {
      this.setState({
        showDetails: true,
        selectedPatient: patient,
        selectedPatientSamples: this.patientSamples(patientId)
      });
    })
  }

  onCancel() {
    this.clearState();
  }

  onNewPatient() {
    this.clearState();
    this.setState({
      newPatient: true
    });
  }

  onEditPatient() {
    this.setState({
      showDetails: false,
      editPatient: true,
      newPatient: null
    });
  }

  onCancelEdit() {
    this.setState({
      showDetails: true,
      editPatient: false,
      newPatient: null
    });
  }

  onUpdatePatient(patient) {
    this.clearState();
    this.patientData.updatePatient(patient).then(patient => {
      this.getPatients();
    });
  }

  onCreatePatient(newPatient) {
    this.clearState();
    this.patientData.createPatient(newPatient).then(patient => {
      this.getPatients();
    });
  }

  onDeletePatient(patientId) {
    this.clearState();
    this.patientData.deletePatient(patientId).then(res => {
      this.getPatients();
    });
  }

  clearState() {
    this.setState({
      showDetails: false,
      selectedPatient: null,
      editPatient: false,
      newPatient: null,
      selectedPatientSamples: null
    });
  }
}

export default App;