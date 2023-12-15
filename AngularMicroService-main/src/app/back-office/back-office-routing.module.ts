import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackOfficeComponent } from './back-office.component';
import { HomeBackComponent } from './home-back/home-back.component';

const routes: Routes = [
  {path: '', component:BackOfficeComponent, children: [
    {path:"dashboard", component:HomeBackComponent},
    {path:"cours",loadChildren:()=> import('./cours/cours.module').then(m=>m.CoursModule)},
    {path:"reclamations",loadChildren:()=> import('./reclamations/reclamations.module').then(m=>m.ReclamationsModule)},
    {path:"ressources",loadChildren:()=> import('./ressources/ressources.module').then(m=>m.RessourcesModule)},
    {path:"plannings",loadChildren:()=> import('./plannings/plannings.module').then(m=>m.PlanningsModule)},
    {path:"seances",loadChildren:()=> import('./seances/seances.module').then(m=>m.SeancesModule)},



]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
