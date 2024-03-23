import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListChecklistComponent } from './list-checklist/list-checklist.component';
import { AddChecklistComponent } from './add-checklist/add-checklist.component';

const routes: Routes = [
  {
    path: 'listcheck',
    component: ListChecklistComponent,
  },
  {
    path: 'addCheck',
    component: AddChecklistComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChecklistRoutingModule { }


