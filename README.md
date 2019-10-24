# patient-gateway

## Project Installation

  - git clone https://github.com/TBrockster/patient-gateway.git
  - cd patient-gateway
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

## My Approach

I began this project by deciding the framworks I was going to use. I chose Django for its powerful django-rest-framwork library, and React due to its affinity for Single Page Applications. I also decided that the default sqlite database would be sufficient for this project, although should probably be changed to something like postgreSQL in production. The first thing I did after the initial setup was write some tests for the patient table structure, and the data loading process. I then looked for different ways to load data into the database from a JSON file. I found that django has an inbuilt 'loaddata' command, but that requires the JSON be formatted in a specific way, so I decided on 'data-migrations' that I wrote myself. Once I had this and my tests were passing, I filled out the necessary steps for hosting the API, e.g. adding a serializer / adding the url, and I was ready to get started on the front end. 

The first thing I did was plan out the design for the Challenges one and two, which I have added below. Seeing Bonus Challenge 2, I decided it would be easier to set up each part of CRUD at the same time, although in hindsight this was perhaps a bit over-ambitious time-wise. I set up the front end with a basic layout, and set up the general component structure with some mock data. Then I linked up the data from the live API. Once that was done I repeated this whole backend -> frontend cycle for the sample data as well.

## Things I didn't have enough time for

  - Implement the sample timeline drafted out below.
  - Add variant data, and incorporate into the timeline display.
  - Write some jest snapshot tests for the front end.
  - Write some capybara / cypress integration tests.

## Patient Sample Design Mock-up

![Alt text](/design/sample_timeline_mockup_zoom.png?raw=true)

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
