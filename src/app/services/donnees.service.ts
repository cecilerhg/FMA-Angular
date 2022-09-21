//Ajouter les services dans :
// - app.module.ts (import)
// - utilisateur.component.ts (import + constructeur)
// - constructor : private donnees: DonneesService

//Sert à importer les données une seule fois et à les réutiliser sur notre site 
//par une API par exemple

//Lien pour rechercher les patients de notre docteur :
//https://fhir.alliance4u.io/api/patient?generalPractitioner.reference=6321f14fd83022001917f14f 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonneesService {

  BASE_URL = "https://fhir.alliance4u.io/api/";
  currentPatient: any;

  constructor(private http: HttpClient) {
    this.currentPatient = localStorage.getItem('currentPatient');
  }

  //Méthode GET PRACTITIONER
  getPractitien() {
    return this.http.get(this.BASE_URL + "practitioner/6321f14fd83022001917f14f");
  }

  //Méthode GET PATIENTS (appartenant à notre practitioner)
  getPatients() {
    return this.http.get(this.BASE_URL + "patient?generalPractitioner.reference=6321f14fd83022001917f14f");
  }

  //Méthode GET PATIENT ID (lors du click sur un patient)
  setPatient(id: any) {
    localStorage.setItem('currentPatient', id);
    this.currentPatient = id;
    return this.http.get(this.BASE_URL + "patient/" + id);
  }

  getCurrentPatient() {
    return this.http.get(this.BASE_URL + "patient/" + this.currentPatient);
  }

  //Méthode GET PATIENT ID (lors du click sur un patient)
  getConditionForCurrentPatient() {
    console.log("currentPatient", this.currentPatient);
    return this.http.get(this.BASE_URL + "condition?subject.reference=Patient/" + this.currentPatient);
  }

  //Méthode GET événements (pour un patient en particulier) - type CONDITION
  getEvent() {
    return this.http.get(this.BASE_URL + "condition");
  }

  //Méthode POST observations (envoyer les observations du médecin concernant le patient sélectionné) 


  //Méthode PUT (modifier ?)
}
