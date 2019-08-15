/** Angular Imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

/** Custom Imports */
import { ChordsverLoginComponent } from './chordsver-login/chordsver-login.component';
import { ChordsverLandingpageComponent } from './chordsver-landingpage.component';

const routes: Routes = [ {path: 'login', component: ChordsverLoginComponent},
{ path: '', component: ChordsverLandingpageComponent} ];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class ChordsverLandingpageRoutingModule { }
