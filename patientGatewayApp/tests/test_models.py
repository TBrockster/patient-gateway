from django.test import TestCase
from patientGatewayApp.models import Patient

# Create your tests here.

class PatientTestCase(TestCase):
    def setUp(self):
        Patient.objects.create(firstname='Test',
                               middleInitial='T',
                               lastname='McTest',
                               gender='Male',
                               dateOfBirth = '2000-01-01')

    def test_patient_name(self):
        """basic test to facilitate project and test framework setup"""
        test_patient = Patient.objects.get(firstname='Test')
        self.assertEqual(test_patient.firstname, 'Test')