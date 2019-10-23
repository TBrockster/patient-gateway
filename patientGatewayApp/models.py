from django.db import models

# Create your models here.

class Patient(models.Model):
    id = models.IntegerField(primary_key=True)
    firstname = models.CharField(max_length=255)
    middleInitial = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    gender = models.CharField(max_length=255)
    dateOfBirth = models.DateField()

    def __str__(self):
        return self.name + ' ' + self.lastname
