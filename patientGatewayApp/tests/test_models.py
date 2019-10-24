from django.test import TestCase
from patientGatewayApp.models import Patient, Sample
import datetime
from django.utils import timezone

# Create your tests here.

class PatientCreationTestCase(TestCase):
    def setUp(self):
        self.test_patient = Patient.objects.create(firstname='Test',
                                                   middleInitial='T',
                                                   lastname='McTest',
                                                   gender='Male',
                                                   dateOfBirth ='2000-01-01')

    def test_patient_firstname(self):
        """basic test to facilitate project and test framework setup"""
        self.assertEqual(self.test_patient.firstname, 'Test')

    def test_patient_middle_initial(self):
        """basic test to facilitate project and test framework setup"""
        self.assertEqual(self.test_patient.middleInitial, 'T')

    def test_patient_lastname(self):
        """basic test to facilitate project and test framework setup"""
        self.assertEqual(self.test_patient.lastname, 'McTest')
    
    def test_patient_gender(self):
        """basic test to facilitate project and test framework setup"""
        self.assertEqual(self.test_patient.gender, 'Male')

    def test_patient_date_of_birth(self):
        """basic test to facilitate project and test framework setup"""
        self.assertEqual(self.test_patient.dateOfBirth, '2000-01-01')

class PatientDataTestCase(TestCase):
    def setUp(self):
        self.test_patient = Patient.objects.get(id=1)

    def test_patient_one_id(self):
        """test expected data is being loaded into db"""
        self.assertEqual(self.test_patient.id, 1)

    def test_patient_one_firstname(self):
        """test expected data is being loaded into db"""
        self.assertEqual(self.test_patient.firstname, 'John')

    def test_patient_one_middle_initial(self):
        """test expected data is being loaded into db"""
        self.assertEqual(self.test_patient.middleInitial, 'J')

    def test_patient_one_lastname(self):
        """test expected data is being loaded into db"""
        self.assertEqual(self.test_patient.lastname, 'Evra')
    
    def test_patient_one_gender(self):
        """test expected data is being loaded into db"""
        self.assertEqual(self.test_patient.gender, 'Male')

    def test_patient_one_date_of_birth(self):
        """test expected data is being loaded into db"""
        self.assertEqual(self.test_patient.dateOfBirth, datetime.date(2000, 2, 13))

class SampleCreationTestCase(TestCase):
    def setUp(self):
        self.test_patient = Patient.objects.create(firstname='Test',
                                         middleInitial='T',
                                         lastname='McTest',
                                         gender='Male',
                                         dateOfBirth ='2000-01-01')

        self.test_sample = Sample.objects.create(patientID=self.test_patient,
                                                 sampleType='TUMOUR',
                                                 date='2018-08-02 22:32:23',
                                                 quality='medium')

    def test_sample_type(self):
        """basic test to facilitate db setup"""
        
        self.assertEqual(self.test_sample.sampleType, 'TUMOUR')

    def test_sample_date(self):
        """basic test to facilitate db setup"""
        self.assertEqual(self.test_sample.date, '2018-08-02 22:32:23')

    def test_sample_quality(self):
        """basic test to facilitate db setup"""
        self.assertEqual(self.test_sample.quality, 'medium')

    def test_sample_is_attached_to_patient(self):
        """test that the many_to_one relationship is in place"""
        self.assertEqual(self.test_patient.sample_set.all()[0], self.test_sample)

class SampleDataTestCase(TestCase):
    def setUp(self):
        self.test_sample = Sample.objects.get(id=1)

    def test_sample_one_id(self):
        """test expected data is being loaded into db"""
        self.assertEqual(self.test_sample.id, 1)

    def test_sample_one_patient_id(self):
        """test expected data is being loaded into db"""
        self.assertEqual(self.test_sample.patientID.id, 2)

    def test_sample_one_sample_type(self):
        """test expected data is being loaded into db"""
        self.assertEqual(self.test_sample.sampleType, 'TUMOUR')

    def test_sample_one_date(self):
        """test expected data is being loaded into db"""
        self.assertEqual(self.test_sample.date, datetime.datetime(2016, 2, 12, 7, 34, 26))

    def test_sample_one_quality(self):
        """test expected data is being loaded into db"""
        self.assertEqual(self.test_sample.quality, 'medium')