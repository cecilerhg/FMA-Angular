import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './composants/utilisateur/utilisateur.component';
import { DonneesService } from './services/donnees.service';

import { FormsModule } from '@angular/forms';
import { PatientsComponent } from './composants/patients/patients.component';
import { EvenementsComponent } from './composants/evenements/evenements.component';
import { ObservationsComponent } from './composants/observations/observations.component';

import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [ //Contient les composants
    AppComponent, UtilisateurComponent, PatientsComponent, EvenementsComponent, ObservationsComponent
  ],
  imports: [ //Contient les modules 
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule, 
    MatFormFieldModule
  ],
  //Contient les services
  providers: [DonneesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
