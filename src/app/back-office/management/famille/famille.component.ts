import { Component, OnInit, ViewChild } from '@angular/core';
import { Famille } from 'src/shared/models/Famille';
import { FamilleService } from 'src/shared/services/famille.service';

import { ModalComponent } from '../../administration/modal/modal.component';



@Component({
  selector: 'app-famille',
  templateUrl: './famille.component.html',
  styleUrls: ['./famille.component.css']
})
export class FamilleComponent implements OnInit{
  familles: Famille[] = [];
  selectedFamille?: Famille;
  isEditMode = false;
  idFamille!: number;
  famille: Famille = new Famille();

  @ViewChild("dialog1", {static: false}) dialog!: ModalComponent;

  constructor(private familleService: FamilleService) {}

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


  openModal(): void {
    const modalDiv =  document.getElementById('exampleModal');
    if(modalDiv!=null){
      modalDiv.style.display= 'block';
    }
   }
   closeModal() {
   
    const modalDiv =  document.getElementById('exampleModal');
    if(modalDiv!=null){
      modalDiv.style.display= 'none';
    }
  }

  submitFamille() {
    if (this.isEditMode) {
      this.updateFamille();
    } else {
      this.createFamille(this.famille);
    }
  }
}