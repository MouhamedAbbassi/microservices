import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanningsRoutingModule } from './plannings-routing.module';
import { AddPlanningComponent } from './add-planning/add-planning.component';
import { EditPlanningComponent } from './edit-planning/edit-planning.component';
import { ListPlanningComponent } from './list-planning/list-planning.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddPlanningComponent,
    EditPlanningComponent,
    ListPlanningComponent
  ],
  imports: [
    CommonModule,
    PlanningsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PlanningsModule { }
