class Validator {

  validateInputs(inputData) {
    let errorMsg = '';
    if(!inputData.firstname) {
      errorMsg += "Please enter the First Name of the patient. \n"
    }
    if(!inputData.middleInitial) {
      errorMsg += "Please enter the Middle Initial of the patient. \n"
    }
    if(!inputData.lastname) {
      errorMsg += "Please enter the Last Name of the patient. \n"
    }
    if(!inputData.gender) {
      errorMsg += "Please enter the Gender of the patient. \n"
    }
    if(!inputData.dateOfBirth) {
      errorMsg += "Please enter the Date of Birth of the patient. \n"
    }
    if(errorMsg.length === 0){
      return true;
    } else {
      alert(errorMsg);
      return false;
    }
  }
}

export default Validator;