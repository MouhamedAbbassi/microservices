import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPlanningComponent } from './list-planning/list-planning.component';
import { AddPlanningComponent } from './add-planning/add-planning.component';
import { EditPlanningComponent } from './edit-planning/edit-planning.component';

const routes: Routes = [
  {path:"planningList", component:ListPlanningComponent},
  {path:"add", component:AddPlanningComponent},
  {path:"edit/:id", component:EditPlanningComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanningsRoutingModule { }
