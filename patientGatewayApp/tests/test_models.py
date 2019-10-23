from django.test import TestCase
from patientGatewayApp.models import Patient
import datetime

# Create your tests here.

class PatientTestCase(TestCase):
    def setUp(self):
        Patient.objects.create(firstname='Test',
                               middleInitial='T',
                               lastname='McTest',
                               gender='Male',
                               dateOfBirth = '2000-01-01')

    def test_patient_firstname(self):
        """basic test to facilitate project and test framework setup"""
        test_patient = Patient.objects.get(firstname='Test')
        self.assertEqual(test_patient.firstname, 'Test')

    def test_patient_middle_initial(self):
        """basic test to facilitate project and test framework setup"""
        test_patient = Patient.objects.get(firstname='Test')
        self.assertEqual(test_patient.middleInitial, 'T')

    def test_patient_lastname(self):
        """basic test to facilitate project and test framework setup"""
        test_patient = Patient.objects.get(firstname='Test')
        self.assertEqual(test_patient.lastname, 'McTest')
    
    def test_patient_gender(self):
        """basic test to facilitate project and test framework setup"""
        test_patient = Patient.objects.get(firstname='Test')
        self.assertEqual(test_patient.gender, 'Male')

    def test_patient_date_of_birth(self):
        """basic test to facilitate project and test framework setup"""
        test_patient = Patient.objects.get(firstname='Test')
        self.assertEqual(test_patient.dateOfBirth, datetime.date(2000, 1, 1))

    def test_patient_zero_id(self):
        """test expected data is being loaded into db"""
        test_patient = Patient.objects.get(id=0)
        self.assertEqual(test_patient.id, 0)

    def test_patient_zero_firstname(self):
        """test expected data is being loaded into db"""
        test_patient = Patient.objects.get(id=0)
        self.assertEqual(test_patient.firstname, 'John')

    def test_patient_zero_middle_initial(self):
        """test expected data is being loaded into db"""
        test_patient = Patient.objects.get(id=0)
        self.assertEqual(test_patient.middleInitial, 'J')

    def test_patient_zero_lastname(self):
        """test expected data is being loaded into db"""
        test_patient = Patient.objects.get(id=0)
        self.assertEqual(test_patient.lastname, 'Evra')
    
    def test_patient_zero_gender(self):
        """test expected data is being loaded into db"""
        test_patient = Patient.objects.get(id=0)
        self.assertEqual(test_patient.gender, 'Male')

    def test_patient_zero_date_of_birth(self):
        """test expected data is being loaded into db"""
        test_patient = Patient.objects.get(id=0)
        self.assertEqual(test_patient.dateOfBirth, datetime.date(2000, 2, 13))