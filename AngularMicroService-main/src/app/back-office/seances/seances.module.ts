import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeancesRoutingModule } from './seances-routing.module';
import { EditSeanceComponent } from './edit-seance/edit-seance.component';
import { AddSeanceComponent } from './add-seance/add-seance.component';
import { ListSeanceComponent } from './list-seance/list-seance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  
    EditSeanceComponent,
       AddSeanceComponent,
       ListSeanceComponent,
  
  ],
  imports: [
    CommonModule,
    SeancesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SeancesModule { }
