import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListReclamationComponent } from './list-reclamation/list-reclamation.component';
import { AddReclamationComponent } from './add-reclamation/add-reclamation.component';

const routes: Routes = [
  {
    path:'listRec',
    component:ListReclamationComponent
  },
  {
    path:'addRec',
    component:AddReclamationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationRoutingModule { }
