import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RessourcesRoutingModule } from './ressources-routing.module';
import { ListRessourcesComponent } from './list-ressources/list-ressources.component';
import { AddRessourcesComponent } from './add-ressources/add-ressources.component';
import { EditRessourcesComponent } from './edit-ressources/edit-ressources.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListRessourcesComponent,
    AddRessourcesComponent,
    EditRessourcesComponent
  ],
  imports: [
    CommonModule,
    RessourcesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RessourcesModule { }
