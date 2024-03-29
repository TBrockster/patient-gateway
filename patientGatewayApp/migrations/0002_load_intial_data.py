# Generated by Django 2.2.6 on 2019-10-23 16:57
import os
import json
from sys import path
from patientGatewayApp.models import Patient
from django.db import migrations

data_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../data'))
data_filename = 'patients.json'
data_file = os.path.join(data_dir, data_filename)

def load_data(apps, schema_editor):
    with open(data_file) as json_file:
        data = json.load(json_file)
    for datum in data:
        Patient.objects.create(firstname=datum['firstname'],
                               middleInitial=datum['middleInitial'],
                               lastname=datum['lastname'],
                               gender=datum['gender'],
                               dateOfBirth=datum['dateOfBirth'])

def unload_data(apps, schema_editor):
    Patients = apps.get_model('patientGatewayApp', 'Patient')
    Patients.objects.all().delete()

class Migration(migrations.Migration):

    dependencies = [
        ('patientGatewayApp', '0001_initial'),
    ]

    operations = [
      migrations.RunPython(load_data, reverse_code=unload_data),
    ]
