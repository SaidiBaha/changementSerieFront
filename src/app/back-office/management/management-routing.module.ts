import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilleComponent } from './famille/famille.component';
import { TesteurComponent } from './testeur/testeur.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [
  {
    path: 'famille',
    component: FamilleComponent,
  },
  {
    path: 'testeur',
    component: TesteurComponent,
  },
  {
    path: 'produit',
    component: ProduitComponent,
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
