import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DonneesService } from 'src/app/services/donnees.service';
@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  //Variables dynamiques 
  nom: string;
  age: number;
  
  constructor() { 
    this.nom = "Camant";
    this.age = 52;
  }

  ngOnInit(): void {
    //Défnition des fonctions, onClick() par exemple
  }

}
