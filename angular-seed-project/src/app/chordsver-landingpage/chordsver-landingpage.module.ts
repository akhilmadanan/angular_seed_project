import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Angular Material Imports */
import {MatButtonModule} from '@angular/material/button'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import { ChordsverLandingpageRoutingModule } from './chordsver-landingpage-routing.module';
import { ChordsverLandingpageComponent } from './chordsver-landingpage.component';
import { ChordsverLoginComponent } from './chordsver-login/chordsver-login.component';
import { ChordsverNavigationComponent } from './chordsver-navigation/chordsver-navigation.component';


@NgModule({
  declarations: [ChordsverLandingpageComponent, ChordsverLoginComponent, ChordsverNavigationComponent],
  imports: [
    CommonModule,
    ChordsverLandingpageRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class ChordsverLandingpageModule { }
