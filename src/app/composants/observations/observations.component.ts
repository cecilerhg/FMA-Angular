import { Component, OnInit } from '@angular/core';
import { DonneesService } from 'app/services/donnees.service';

@Component({
  selector: 'app-observations',
  templateUrl: './observations.component.html',
  styleUrls: ['./observations.component.css']
})
export class ObservationsComponent implements OnInit {

  constructor(private donneeService : DonneesService) { }

  condition = {
    "resourceType": "Condition",
    "subject": {
      "reference": "Patient/6321e71ed83022001917f14c"
    },
    "recordedDate": "",
    "recorder": {
      "reference": "Practitioner/6321f14fd83022001917f14f",
      "display": "Practitioner"
    },
    "note": [
      {
        "text": ""
      }
    ]
  };

  ngOnInit(): void {

  }

  creerObservation(){
    this.donneeService.postObservations(this.condition).subscribe(data =>{
      console.log("envoyé",data);
    });
  }

}
