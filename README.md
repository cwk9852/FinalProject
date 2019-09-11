## Team Windy Daydreamer
* Craig Dreiling - Scrum Master
* Emily Lau - Team Sweeper
* Miguel Marsiglia - Repo Owner
* Cecil Kitch - DBA

### Summary / Overview
QRx - Patient/Provider Interface. Developed over a ten day sprint by a team of four, QRx is a collaborative proof of concept for streamlining emergency medical provider access to patient information. QRx utilizes restful services to provide a single, dependable source for patient healthcare providers to access their patients' medication lists. QRx is designed with a patient-centric experience focus.

### Technologies Used
* Java, JDBC, mySQL
* Java Persistance API
* Spring Boot, Spring Data, Spring Rest, Spring Security
* Angular/TS
* Angular Material Component Library
* Bootstrap Component Library
* HTML5/CSS3/JS

### Live Demo 
http://cecilkitch.com:8080/QRx/

### Entity Diagram
![qrxdbERD](qrxdbERD.png)

### REST API Endpoints
| Action |HTTP Verb| Resource URI                           | Action           |
| -------|---------|----------------------------------------| -----------------|
| LIST   | GET     | /api/users/                            | List Users       |
| CREATE | POST    | /api/users/                            | Add User         |
| READ   | GET     | /api/users/{uid}/                      | Show User        |
| UPDATE | PUT     | /api/users/{uid}/                      | Update User      |
| DELETE | DELETE  | /api/users/{uid}/                      | Delete User      |
| -------|---------|----------------------------------------| -----------------|
| LIST   | GET     | /api/providers/                        | List Providers   |
| CREATE | POST    | /api/providers/                        | Add Provider     |
| READ   | GET     | /api/providers/{pid}/                  | Show Provider    |
| UPDATE | PUT     | /api/providers/{pid}/                  | Update Provider  |
| DELETE | DELETE  | /api/providers/{pid}/                  | Delete Provider  |
| -------|---------|----------------------------------------| -----------------|
| LIST   | GET     | /api/drugs/                            | List Drugs       |
| CREATE | POST    | /api/drugs/                            | Add Drug         |
| READ   | GET     | /api/drugs/{did}/                      | Show Drug        |
| UPDATE | PUT     | /api/drugs/{did}/                      | Update Drug      |
| DELETE | DELETE  | /api/drugs/{did}/                      | Delete Drug      |
|--------|---------|----------------------------------------| -----------------|
| LIST   | GET     | /api/patients/                         | List Patients    |
| CREATE | POST    | /api/patients/                         | Add Patient      |
| READ   | GET     | /api/patients/{pid}/                   | Show Patient     |
| UPDATE | PUT     | /api/patients/{pid}/                   | Update Patient   |
| DELETE | DELETE  | /api/patients/{pid}/                   | Delete Patient   |
|--------|---------|----------------------------------------|------------------|
| LIST   | GET     | /api/patients/medications/             | List Medications |
| CREATE | POST    | /api/patients/medications/             | Add Medication   |
| READ   | GET     | /api/patients/medications/{mid}/       | Show Medication  |
| UPDATE | PUT     | /api/patients/medications/{mid}/       | Update Medication|
| DELETE | DELETE  | /api/patients/medications/{mid}/       | Delete Medication|
|--------|---------|----------------------------------------|------------------|
| LIST   | GET     | /api/patients/contacts                 | List Contact     |
| CREATE | POST    | /api/patients/contacts                 | Add Contact      |
| READ   | GET     | /api/patients/contacts/{cid}           | Show Contact     |
| UPDATE | PUT     | /api/patients/contacts/{cid}           | Update Contact   |
| DELETE | DELETE  | /api/patients/contacts/{cid}           | Delete Contact   |
|--------|---------|----------------------------------------|------------------|
| LIST   | GET     | /api/patients/notes                    | List Notes       |
| CREATE | POST    | /api/patients/notes                    | Add Note         |
| READ   | GET     | /api/patients/notes/{nid}              | Show Note        |
| UPDATE | PUT     | /api/patients/notes/{nid}              | Update Note      |
| DELETE | DELETE  | /api/patients/notes/{nid}              | Delete Note      |
|--------|---------|----------------------------------------|------------------|
| LIST   | GET     | /api/patients/allergies/               | List Allergies   |
| CREATE | POST    | /api/patients/allergies/               | Add  Allergy     |
| READ   | GET     | /api/patients/allergies/{aid}/         | Show Allergies   |
| UPDATE | PUT     | /api/patients/allergies/{aid}/         | Update Allergy   |
| DELETE | DELETE  | /api/patients/allergies/{aid}/         | Delete Allergy   |
|--------|---------|----------------------------------------|------------------|
| LIST   | GET     | /api/patients/diagnosis/               | List Diagnosis   |
| CREATE | POST    | /api/patients/diagnosis/               | Add  Diagnosis   |
| READ   | GET     | /api/patients/diagnosis/{did}/         | Show Diagnosis   |
| UPDATE | PUT     | /api/patients/diagnosis/{did}/         | Update Diagnosis |
| DELETE | DELETE  | /api/patients/diagnosis/{did}/         | Delete Diagnosis |
|--------|---------|----------------------------------------|------------------|
