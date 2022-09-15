//Fichiers typeScript
//Contient des variables dynamiques

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FMA';
  test = 'variable de test';
}
