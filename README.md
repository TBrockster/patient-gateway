# patient-gateway

## Project Installation

  - git clone https://github.com/TBrockster/patient-gateway.git
  - cd .\patient-gateway\
  - pipenv install
  - python manage.py migrate
  - python manage.py runserver
  
You can now visit:
  - 127.0.0.1:8000/patients/
  - 127.0.0.1:8000/samples/
 
and if you create a superuser with:
  - python manage.py createsuperuser
  
you can visit:
  - 127.0.0.1:8000/admin

For front end access: 
In a new terminal navigate to: \patient-gateway\patient-gateway-fe\
  - npm install
  - npm start
  
You can now visit:
  - http://localhost:3000/
  - (on a CORS friendly version of chrome)
  
This page lists all the patients, and allows for the creation of new users a button / form at the bottom (the date must be in yyyy-mm-dd format).
If you select a patient, the form at the bottom will update to show their information, and the details of any samples that belong to them.

## Patient Sample Design Mock-up

![Alt text](.\design\sample_timeline_mockup.png?raw=true)

## Initial Project Setup

Setup as follows:

  - pip install virtualenv
  - virtualenv venv
  - pip install django
  - django-admin startproject patientGateway .
  - git init
  - git remote add origin https://github.com/TBrockster/patient-gateway.git
  - git add .
  - git commit -m 'project setup'
  - git push -u origin master
  - python manage.py startapp patientGatewayApp
  - 'patientGatewayApp.apps.PatientgatewayappConfig' added to INSTALLED_APPS in ./patientGateway/setting.py
  - python manage.py migrate
  - python manage.py createsuperuser
    - Username: toby
    - Email Address: tobybrock93@gmail.com
    - Password: psswrd123
