from rest_framework import serializers
from .models import Patient, Sample

class PatientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Patient
        fields = ('id',
                  'firstname',
                  'middleInitial',
                  'lastname',
                  'gender',
                  'dateOfBirth',)

class SampleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sample
        fields = ('id',
                  'patientId',
                  'sampleType',
                  'date',
                  'quality',)