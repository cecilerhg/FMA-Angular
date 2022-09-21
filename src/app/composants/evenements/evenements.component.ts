import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { DonneesService } from 'app/services/donnees.service';
import { ChangeDetectorRef } from '@angular/core';  

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css']
})
export class EvenementsComponent implements OnInit, OnChanges, OnChanges {

  @Input() patient: any;
  conditions: any;

  constructor(private donneeService: DonneesService) { }

  ngOnInit(): void {
    this.donneeService.getConditionForCurrentPatient().subscribe(data =>{
      console.log(data);
      this.conditions = data;
    });
  }

  ngOnChanges() {
    console.log("change patient pour evenement");
    this.ngOnInit();
  } 
 
}
