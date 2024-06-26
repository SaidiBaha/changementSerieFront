import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ModalComponent } from './modal/modal.component';
import { ProjectComponent } from './project/project.component';
import { DemandechangementComponent } from './demandechangement/demandechangement.component';
import { MatDialogModule } from '@angular/material/dialog';

import { MatSelectModule } from '@angular/material/select';

import { MatInputModule } from '@angular/material/input';
import { TacheComponent } from './tache/tache.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ListReclamationComponent } from './list-reclamation/list-reclamation.component';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { RapportPowerBiComponent } from './rapport-power-bi/rapport-power-bi.component';


@NgModule({
    declarations: [
        AdminComponent,
        ModalComponent,
        ProjectComponent,
        DemandechangementComponent,
        TacheComponent,
        ListReclamationComponent,
        UnauthorizedComponent,
        RapportPowerBiComponent
    ],
    imports: [
        CommonModule,
        AdministrationRoutingModule,
        FormsModule,
        MatDialogModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatTableModule,
        MatDatepickerModule, 
        MatNativeDateModule, // Ajouté
        MatInputModule, // 
        MatIconModule,
        MatMenuModule
        
    ]
})
export class AdministrationModule { }
