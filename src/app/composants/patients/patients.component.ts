import { Component, OnInit } from '@angular/core';
import { DonneesService } from '../../services/donnees.service';
import { ThisReceiver } from '@angular/compiler';
import {MatSelectModule} from '@angular/material/select';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  //Définition de la variable contenant le patient
  patients: any;
  patient: any;
  
  constructor(private donneesService: DonneesService) {
    this.donneesService.getCurrentPatient().subscribe(data => {
      this.patient = data;
    });
  }

  ngOnInit(): void {
    this.donneesService.getPatients().subscribe((data)  => {
      this.patients = data;
      console.log(this.patient);
    });
  }

  selectPatient(id: any){
    console.log("patient id", id);
    this.donneesService.setPatient(id).subscribe(data =>{
      this.patient = data;
      console.log(data);
    });
  }
}
