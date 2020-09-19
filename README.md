# AdgPracticalTestFe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.
Intended to be the frontend for [Practical Test BE](https://github.com/lalajr/adg-pratical-test-be).
> This project is under development environment only

## Requirements
- Setup of [Practical Test BE](https://github.com/lalajr/adg-pratical-test-be) the frontend will make API request to that backend repo.

## Installation
Follow the steps below to make your clone of this frontend up and running.

1. After cloning, run command `npm install` to initiate all dependencies for this project.
2. Open the file `environment.ts` located in `src\environment\` and change the key `apiUrl` to that url path where your backend is located inserting `api` at the last position of it eg: `http://localhost/MYBACKENDPATHHERE/public/api/` **Note: leave the key token at it is**
3. Now run the command `npm start` this will start dev server of the project (leave it running). Navigate to `http://localhost:4200/` and your app is loaded there.
> Note: At this point make sure your local server for the Backend is up and running, so that this app can make API request.

> Note: If you are seeing a javascript alert with 'undefined error' means that your Backend service is not running.
