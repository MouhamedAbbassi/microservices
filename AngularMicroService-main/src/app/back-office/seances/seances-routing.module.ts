import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSeanceComponent } from './list-seance/list-seance.component';
import { AddSeanceComponent } from './add-seance/add-seance.component';
import { EditSeanceComponent } from './edit-seance/edit-seance.component';

const routes: Routes = [
  {path:"seancesList", component:ListSeanceComponent},
  {path:"add", component:AddSeanceComponent},
  {path:"edit/:id", component:EditSeanceComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeancesRoutingModule { }
