import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationsRoutingModule } from './reclamations-routing.module';
import { ListReclamationsComponent } from './list-reclamations/list-reclamations.component';
import { AddReclamationComponent } from './add-reclamation/add-reclamation.component';
import { EditReclamationComponent } from './edit-reclamation/edit-reclamation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListReclamationsComponent,
    AddReclamationComponent,
    EditReclamationComponent
  ],
  imports: [
    CommonModule,
    ReclamationsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReclamationsModule { }
