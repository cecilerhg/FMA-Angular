import { Component, OnInit } from '@angular/core';
import { DonneesService } from '../../services/donnees.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  //Définition de la variable contenant le patient
  patient: any;

  patients: { "patient": [] };

  constructor(private donneesService: DonneesService) {
    this.patients = { "patient": [] };
   }

  ngOnInit(): void {
    this.patient = this.donneesService.getPatients().subscribe((data)  => {
      this.patient = data;

      console.log(this.patient);
    });
  }

}
