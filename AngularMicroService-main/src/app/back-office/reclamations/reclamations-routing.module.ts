import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListReclamationsComponent } from './list-reclamations/list-reclamations.component';
import { AddReclamationComponent } from './add-reclamation/add-reclamation.component';
import { EditReclamationComponent } from './edit-reclamation/edit-reclamation.component';

const routes: Routes = [
  {path:"reclamationList", component:ListReclamationsComponent},
  {path:"add", component:AddReclamationComponent},
  {path:"edit/:id", component:EditReclamationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationsRoutingModule { }
