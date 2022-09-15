import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DonneesService } from '../../services/donnees.service';
@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  //Variables dynamiques 
  practitioner: any;
  
  constructor(private donneesService : DonneesService) { 

  }

  ngOnInit(): void {
    this.practitioner = this.donneesService.getPractitien().subscribe((data) => {
      this.practitioner = data;
    });;
  }

}
