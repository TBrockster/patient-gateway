import Configuration from './configuration';

class PatientData {

  constructor() {
    this.config = new Configuration();
  }

  async retrievePatients() {
    return fetch(this.config.PATIENT_DATA_URL)
      .then(response => {
        if (!response.ok) {
          this.handleResponseError(response);
        }
        return response.json();
      })
      .then(patients => {
        console.log('Retrieved Patients:');
        console.log(patients);
        return patients
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  async getPatient(patientId) {
    console.log('PatientData.getPatient():');
    console.log('Patient ID: ' + patientId);
    return fetch(this.config.PATIENT_DATA_URL)
      .then(response => {
        if (!response.ok) {
          this.handleResponseError(response);
        }
        return response.json();
      })
      .then(patients => {
        console.log('Retrieved Patients:');
        console.log(patients);
        for (var i = 0; i < patients.length; i++) {
          if (patients[i].id === patientId) {
            return Promise.resolve(patients[i]);
          }
        }
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  async createPatient(newPatient) {
    console.log('PatientData.createPatient():');
    console.log(newPatient);
    return fetch(this.config.PATIENT_DATA_URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPatient)
      })
      .then(response => {
        if (!response.ok) {
          this.handleResponseError(response);
        }
        return response.json();
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  async deletePatient(patientId) {
    console.log('PatientData.deletePatient():');
    console.log('Patient: ' + patientId);
    return fetch(patientId, {
        method: 'DELETE',
        mode: 'cors'
      })
      .then(response => {
        if (!response.ok) {
          this.handleResponseError(response);
        }
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  async updatePatient(patient) {
    console.log('PatientData.updatePatient():');
    console.log(patient);
    return fetch(patient.id, {
        method: 'PUT',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(patient)
      })
      .then(response => {
        if (!response.ok) {
          this.handleResponseError(response);
        }
        return response.json();
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  handleResponseError(response) {
    throw new Error('HTTP error, status = ' + response.status);
  }

  handleError(error) {
    console.log(error.message);
  }
}

export default PatientData;