import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import { ProjectComponent } from './project/project.component';
import { DemandechangementComponent } from './demandechangement/demandechangement.component';
import { TacheComponent } from './tache/tache.component';
import { ListReclamationComponent } from './list-reclamation/list-reclamation.component';
import { AuthGuard } from '../auth.guard';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { RapportPowerBiComponent } from './rapport-power-bi/rapport-power-bi.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['ADMIN'] } // Rôle attendu pour accéder à cette route
  },
  {
    path: 'projet',
    component: ProjectComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['ADMIN', 'MANAGER'] }
  },
  {
    path: 'changement',
    component: DemandechangementComponent,
  },
  {
    path: 'tache',
    component: TacheComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['ADMIN', 'MANAGER'] }
  },
  {
    path: 'tache/:projetId',
    component: TacheComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles:['ADMIN', 'MANAGER'] }
  },
  {
    path: 'listRec',
    component: ListReclamationComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['ADMIN', 'MANAGER'] }
  },
  {
    path: 'rapportPowerBi',
    component: RapportPowerBiComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['ADMIN', 'MANAGER'] }
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent
  },
  {
    path: '**',  // route de fallback pour les chemins non trouvés
    redirectTo: 'unauthorized'
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
