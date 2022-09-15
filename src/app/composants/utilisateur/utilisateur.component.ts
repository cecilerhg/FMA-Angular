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
  practitioner: any;
  
  constructor(private donneeService : DonneesService) { 
    
  }

  ngOnInit(): void {
    this.practitioner = this.donneeService.getPractitien().subscribe((data) => {
      this.practitioner = data;
    });;
  }

}
