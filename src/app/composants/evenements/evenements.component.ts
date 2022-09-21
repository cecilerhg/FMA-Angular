import { Component, OnInit } from '@angular/core';
import { DonneesService } from 'app/services/donnees.service';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css']
})
export class EvenementsComponent implements OnInit {

  conditions: any;

  constructor(private donneeService: DonneesService) { }

  ngOnInit(): void {
    this.donneeService.getConditionForCurrentPatient().subscribe(data =>{
      console.log(data);
      this.conditions = data;
    });
  }

}
