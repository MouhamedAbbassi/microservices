import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCoursComponent } from './list-cours/list-cours.component';
import { AddCoursComponent } from './add-cours/add-cours.component';
import { EditCoursComponent } from './edit-cours/edit-cours.component';

const routes: Routes = [
  {path:"coursList", component:ListCoursComponent},
  {path:"add", component:AddCoursComponent},
  {path:"edit/:id", component:EditCoursComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursRoutingModule { }
