import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import { ProjectComponent } from './project/project.component';
import { DemandechangementComponent } from './demandechangement/demandechangement.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'projet',
    component: ProjectComponent,
  },
  {
    path: 'changement',
    component: DemandechangementComponent,
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
