class PatientData {

  constructor() {
    this.patients = [
      {id:1, firstname:'Alice', middleInitial:'A', lastname:'Anderson', gender:'Female', dateOfBirth:'1990-01-01'},
      {id:2, firstname:'Bob', middleInitial:'B', lastname:'Borislav', gender:'Male', dateOfBirth:'1999-12-31'},
      {id:3, firstname:'Chris', middleInitial:'C', lastname:'Chamomile', gender:'Male', dateOfBirth:'2010-01-01'},
    ];
  }

  async retrievePatients() {
    return Promise.resolve(this.patients);
  }

  async getPatient(patientId) {
    for(var i = 0; i < this.patients.length; i++) {
      if ( this.patients[i].id === patientId) {
        return Promise.resolve(this.patients[i]);
      }
    }
    return null;
  }

  async createPatient(patient) {
    console.log('PatientData.createPatient():');
    console.log(patient);
    return Promise.resolve(patient);
  }

  async deletePatient(patientId) {
    console.log('PatientData.deletePatient():');
    console.log('Patient ID:' + patientId);
  }

  async updatePatient(patient) {
    console.log('PatientData.updatePatient():');
    console.log(patient);
  }
}

export default PatientData;