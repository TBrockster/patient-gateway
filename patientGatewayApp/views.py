from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PatientSerializer
from .models import Patient

# Create your views here.

class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all().order_by('id')
    serializer_class = PatientSerializer