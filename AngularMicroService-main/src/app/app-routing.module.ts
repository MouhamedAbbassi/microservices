import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path:"front",loadChildren:()=>
  import('./front-office/front-office.module').then(m=>(m).FrontOfficeModule)},
  {path:"back",loadChildren:()=>
  import('./back-office/back-office.module').then(m=>(m).BackOfficeModule)},
  {path:"**", component:NotFoundComponent},

 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
