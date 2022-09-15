//Ajouter les services dans :
  // - app.module.ts (import)
  // - utilisateur.component.ts (import + constructeur)
  // - constructor : private donnees: DonneesService

  //Sert à importer les données une seule fois et à les réutiliser sur notre site 
  //par une API par exemple
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonneesService {

  constructor() { }
}
