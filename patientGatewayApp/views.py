from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PatientSerializer, SampleSerializer
from .models import Patient, Sample

# Create your views here.

class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all().order_by('id')
    serializer_class = PatientSerializer

class SampleViewSet(viewsets.ModelViewSet):
    queryset = Sample.objects.all().order_by('id')
    serializer_class = SampleSerializer