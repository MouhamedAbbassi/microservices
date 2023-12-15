import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRessourcesComponent } from './list-ressources/list-ressources.component';
import { AddRessourcesComponent } from './add-ressources/add-ressources.component';
import { EditRessourcesComponent } from './edit-ressources/edit-ressources.component';


const routes: Routes = [
  {path:"ressourcesList", component:ListRessourcesComponent},
  {path:"add", component:AddRessourcesComponent},
  {path:"edit/:id", component:EditRessourcesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RessourcesRoutingModule { }
