import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {  Router } from '@angular/router';
import { Reclamation } from 'src/shared/models/Reclamation';
import { ReclamationService } from 'src/shared/services/Reclamation.service';
import { AuthentificationService } from 'src/shared/services/authentification.service';

@Component({
  selector: 'app-list-reclamation',
  templateUrl: './list-reclamation.component.html',
  styleUrls: ['./list-reclamation.component.css']
})
export class ListReclamationComponent implements OnInit {
  @ViewChild("modalContent", { static: true }) modalContent!: TemplateRef<any>;
  @ViewChild("addModalContent", { static: true }) addModalContent!: TemplateRef<any>;


  reclamations: Reclamation[]=[];
  reclamation:Reclamation=new Reclamation();
  idRec:number;
  dialogRef: MatDialogRef<any>;
  userId:number;
  addModalOpened = false;

  constructor(private reclamationService: ReclamationService,private dialog: MatDialog,private authService:AuthentificationService) { }

  ngOnInit(): void {
    this.getAllReclamations();
  }

  getAllReclamations() :void{
    this.reclamationService.getAllReclamations().subscribe(
    (data:Reclamation[]) => {
      this.reclamations = data;
    });
  }
  getCurrentUserId():void{
  const userId = this.authService.getCurrentUserId(); // Appelez la méthode getCurrentUserId() à partir de l'instance de votre service
     console.log('Current user ID:', userId);
   
  }

  saveReclamation(reclamation: Reclamation) {
    const userId = this.authService.getCurrentUserId(); 
    this.reclamationService.saveReclamation(reclamation,this.userId).subscribe(
      (data: Reclamation) => {
        console.log('Reclamation saved successfully:', data);
        // Ajoutez ici la logique pour gérer la réponse de sauvegarde si nécessaire
      },
      error => {
        console.error('Error saving reclamation:', error);
        // Ajoutez ici la logique pour gérer les erreurs de sauvegarde si nécessaire
      }
    );
  }

  updateReclamation(reclamation: Reclamation) {
    this.reclamationService.updateReclamation(reclamation.idDto, reclamation).subscribe(
      (data: Reclamation) => {
        console.log('Reclamation updated successfully:', data);
        // Ajoutez ici la logique pour gérer la réponse de mise à jour si nécessaire
      },
      error => {
        console.error('Error updating reclamation:', error);
        // Ajoutez ici la logique pour gérer les erreurs de mise à jour si nécessaire
      }
    );
  }

  deleteReclamation(id: number) {
    this.reclamationService.deleteReclamation(id).subscribe(
      () => {
        console.log('Reclamation deleted successfully');
        // Ajoutez ici la logique pour gérer la réponse de suppression si nécessaire
        this.getAllReclamations(); // Rechargez la liste des réclamations après la suppression
      },
      error => {
        console.error('Error deleting reclamation:', error);
        // Ajoutez ici la logique pour gérer les erreurs de suppression si nécessaire
      }
    );
  }

  openModal(): void {
    this.idRec = this.reclamation.idDto;
    this.dialogRef = this.dialog.open(this.modalContent); // Vous devez remplacer ceci par le contenu de votre modal
  }
  openAddModal(): void {
    this.idRec = this.reclamation.idDto;
    this.dialogRef = this.dialog.open(this.addModalContent); // Vous devez remplacer ceci par le contenu de votre modal
  }
  closeModal(): void {
    this.dialogRef.close();
  }




 
}
