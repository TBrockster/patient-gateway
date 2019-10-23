import React, { Component } from 'react';
import './App.css';
import PatientDetails from './patient-details';
import NewPatient from './new-patient';
import EditPatient from './edit-patient';
import PatientData from './shared/mock-patient-data';

class App extends Component {

  constructor(props) {
    super(props);
    this.patientData = new PatientData();
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
      newPatient: null
    }
  }

  componentDidMount() {
    this.getPatients();
  }

  render() {
    const patients = this.state.patients;
    if(!patients) return null;
    const showDetails = this.state.showDetails;
    const selectedPatient = this.state.selectedPatient;
    const newPatient = this.state.newPatient;
    const editPatient = this.state.editPatient;
    const listPatients = patients.map((patient) =>
      <ul key={patient.link} onClick={() => this.onSelect(patient.link)}>
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
            {showDetails && selectedPatient && <PatientDetails patient={selectedPatient} onEdit={this.onEditPatient}  onDelete={this.onDeletePatient} />}
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

  onSelect(patientLink) {
    this.clearState();
    this.patientData.getPatient(patientLink).then(patient => {
      this.setState({
        showDetails: true,
        selectedPatient: patient
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

  onDeletePatient(patientLink) {
    this.clearState();
    this.patientData.deletePatient(patientLink).then(res => {
      this.getPatients();
    });
  }

  clearState() {
    this.setState({
      showDetails: false,
      selectedPatient: null,
      editPatient: false,
      newPatient: null
    });
  }
}

export default App;