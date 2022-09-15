//Ajouter les services dans :
  // - app.module.ts (import)
  // - utilisateur.component.ts (import + constructeur)
  // - constructor : private donnees: DonneesService

  //Sert à importer les données une seule fois et à les réutiliser sur notre site 
  //par une API par exemple

  //Lien pour rechercher les patients de notre docteur :
  // https://fhir.alliance4u.io/api/patient?generalPractitioner.reference=Practitioner/6321f14fd83022001917f14f
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonneesService {

  BASE_URL = "https://fhir.alliance4u.io/api/";

  constructor(private http: HttpClient) { }

  getPractitien(){
    return this.http.get(this.BASE_URL + "practitioner/6321f14fd83022001917f14f");
  }
}
