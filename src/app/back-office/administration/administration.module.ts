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
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    declarations: [
        AdminComponent,
        ModalComponent,
        ProjectComponent,
        DemandechangementComponent
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
        HttpClientModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule
        
    ]
})
export class AdministrationModule { }
