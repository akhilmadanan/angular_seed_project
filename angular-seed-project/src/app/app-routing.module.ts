import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChordsverLandingpageModule } from './chordsver-landingpage/chordsver-landingpage.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ChordsverLandingpageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
