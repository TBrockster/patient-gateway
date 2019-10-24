import Configuration from './configuration';

class SampleData {

  constructor() {
    this.config = new Configuration();
  }

  async retrieveSamples() {
    return fetch(this.config.SAMPLE_DATA_URL)
      .then(response => {
        if (!response.ok) {
          this.handleResponseError(response);
        }
        return response.json();
      })
      .then(samples => {
        console.log('Retrieved Samples:');
        console.log(samples);
        return samples
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  handleResponseError(response) {
    throw new Error('HTTP error, status = ' + response.status)
  }

  handleError(error) {
    console.log(error.message);
  }
}

export default SampleData;