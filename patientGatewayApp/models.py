from django.db import models

# Create your models here.

class Patient(models.Model):
    firstname = models.CharField(max_length=255)
    middleInitial = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    gender = models.CharField(max_length=255)
    dateOfBirth = models.DateField()

    def __str__(self):
        return self.firstname + ' ' + self.lastname

class Sample(models.Model):
    patientId = models.ForeignKey(
      Patient,
      db_column='patientId',
      on_delete=models.CASCADE,
    )
    sampleType = models.CharField(max_length=255)
    date = models.DateTimeField()
    quality = models.CharField(max_length=255)