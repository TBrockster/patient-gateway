# patient-gateway

## setup

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