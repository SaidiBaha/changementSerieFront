import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Famille } from 'src/shared/models/Famille';
import { FamilleService } from 'src/shared/services/famille.service';

import { ModalComponent } from '../../administration/modal/modal.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-famille',
  templateUrl: './famille.component.html',
  styleUrls: ['./famille.component.css']
})
export class FamilleComponent implements OnInit{
  @ViewChild("modalFamilleContent", { static: true }) modalFamilleContent!: TemplateRef<any>;
  @ViewChild("updateModalContent", { static: true }) updateModalContent!: TemplateRef<any>;
  familles: Famille[] = [];
  selectedFamille?: Famille;
  isEditMode = false;
  idFamille!: number;
  famille: Famille = new Famille();
  familleGroup:FormGroup;
  dialogRef: MatDialogRef<any>;
  @ViewChild("dialog1", {static: false}) dialog!: ModalComponent;

  constructor(private familleService: FamilleService,
    private dialogg: MatDialog
  ) {
    this.familleGroup=new FormGroup({
      nomFamilleDto:new FormControl('',Validators.required)
    });
  }

  ngOnInit(): void {
    this.getAllFamilles();
  }

  getAllFamilles(): void {
    this.familleService.getAllFamilles().subscribe(data => {
      this.familles = data;
    });
  }

  createFamille(familleData: Famille): void {
    this.familleService.createFamille(familleData).subscribe({
      next: (data) => {
        this.familles.push(data);
        this.dialog.close();
      },
      error: (error) => {
        console.error('Error creating famille:', error);
      }
    });
  }

  updateFamille(): void {
    this.familleService.updateFamilles(this.idFamille, this.famille).subscribe(() => {
      this.dialog.close();
      this.getAllFamilles();
    });
  }

  deleteFamille(id: number): void {
    this.familleService.deleteProjet(id).subscribe(() => {
      this.familles = this.familles.filter(f => f.idDto !== id);
    });
  }

  /*openModal(famille?: Famille) {
    if (famille) {
      this.famille = { ...famille };
      this.isEditMode = true;
      this.idFamille = famille.idDto;
    } else {
      this.famille = new Famille();
      this.isEditMode = false;
      this.idFamille = undefined;
    }
    this.dialog?.open();
  }*/


  // openModal(): void {
  //   const modalDiv =  document.getElementById('exampleModal');
  //   if(modalDiv!=null){
  //     modalDiv.style.display= 'block';
  //   }
  //  }


  openModal(): void {
    this.idFamille = this.famille.idDto;
    this.dialogRef = this.dialogg.open(this.modalFamilleContent); // Vous devez remplacer ceci par le contenu de votre modal
  }
  openUpdateModal(): void {
    this.idFamille = this.famille.idDto;
    this.dialogRef = this.dialogg.open(this.updateModalContent); // Vous devez remplacer ceci par le contenu de votre modal
  }


  //  closeModal() {
   
  //   const modalDiv =  document.getElementById('exampleModal');
  //   if(modalDiv!=null){
  //     modalDiv.style.display= 'none';
  //   }
  // }
  closeModal(): void {
    this.dialogRef.close();
  }
  submitFamille() {
    if (this.isEditMode) {
      this.updateFamille();
    } else {
      this.createFamille(this.famille);
    }
  }
}
