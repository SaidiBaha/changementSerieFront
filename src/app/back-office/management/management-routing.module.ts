import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilleComponent } from './famille/famille.component';
import { TesteurComponent } from './testeur/testeur.component';
import { ProduitComponent } from './produit/produit.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: 'famille',
    component: FamilleComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['ADMIN'] }
  },
  {
    path: 'testeur',
    component: TesteurComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['ADMIN'] }
  },
  {
    path: 'produit',
    component: ProduitComponent,
    canActivate: [AuthGuard],
    data: { expectedRoles: ['ADMIN'] }
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
