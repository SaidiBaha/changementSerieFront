import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ChecklistVide } from 'src/shared/models/ChecklistVide';
import { TypeValidation, TypeValidation2, ValidationsInput } from 'src/shared/models/ValidationsInput';
import { PlanningChangementSerieService } from 'src/shared/services/PlanningChangement.service';
import { AuthentificationService } from 'src/shared/services/authentification.service';
import { ChecklistService } from 'src/shared/services/checklist.service';

@Component({
  selector: 'app-add-checklist-complete-validation2',
  templateUrl: './add-checklist-complete-validation2.component.html',
  styleUrls: ['./add-checklist-complete-validation2.component.css']
})
export class AddChecklistCompleteValidation2Component implements OnInit{

  userId: number; // Propriété pour stocker l'ID de l'utilisateur connecté
  id: number; // Initialiser la valeur de planningId
  constats: string;
  resteAfaire: string;
  validationsInput: ValidationsInput[] = []; 
  checklistVide: ChecklistVide | null = null; // Propriété pour stocker les détails de la checklist
  planningId: number  ;
  checklistCompleteeId: number;
  checklistId: number;
  checklistIds: number[] = [];
  currentIndex: number = 0;
  checklistRemplie: boolean = false;


  constructor(private checklistService: ChecklistService,
    private router: Router,
    private planningService:PlanningChangementSerieService,
    private authService: AuthentificationService,
    private route: ActivatedRoute,
    private toastr: ToastrService 
) { }


ngOnInit(): void {


  this.checklistCompleteeId = +this.route.snapshot.paramMap.get('checklistCompleteeId');
  this.checklistId = +this.route.snapshot.paramMap.get('checklistId');
  this.planningId = +this.route.snapshot.queryParamMap.get('planningId');

  console.log('Received ChecklistCompletee ID:', this.checklistCompleteeId);
  console.log('Received Checklist ID:', this.checklistId);
  console.log('Received Planning ID:', this.planningId);
 
 
     this.loadChecklistDetails();
 
 }
 /*
 loadChecklistDetails(): void {
   if (!this.checklistId) {
     console.error('ID de la checklist non défini');
     return;
   }
   const userId = this.authService.getCurrentUserId();
   const numericUserId = Number(userId);
 
   this.checklistService.getChecklistDetailsForUser(numericUserId, this.checklistId).subscribe(
     (details: ChecklistVide) => {
       this.checklistVide = details;
       this.initValidationsInput();
     },
     error => {
       console.error('Erreur lors de la récupération des détails de la checklist:', error);
     }
   );
 }*/
 loadChecklistDetails(): void {
   if (!this.checklistId) {
     console.error('ID de la checklist non défini');
     return;
   }
 
   const userId = this.authService.getCurrentUserId();
   const numericUserId = Number(userId);
 
   this.checklistService.getChecklistDetailsForUser(numericUserId, this.checklistId).subscribe(
     (details: ChecklistVide) => {
       this.checklistVide = details;
       this.planningId = this.checklistVide.checklist.planningDto.idDto; // Assigner la valeur de planningId
       this.initValidationsInput();
         this.loadChecklistIds();
     },
     error => {
       console.error('Erreur lors de la récupération des détails de la checklist:', error);
     }
   );
 }

 loadChecklistIds(): void {
   this.planningService.getChecklistIdsByPlanningId(this.planningId).subscribe(
     (checklistIds: number[]) => {
       this.checklistIds = checklistIds;
     },
     error => {
       console.error('Erreur lors de la récupération des checklistIds:', error);
       this.toastr.error('Erreur lors de la récupération des checklistIds.', 'Erreur');
     }
   );
 }

 launchChangementProcess(): void {
   if (this.currentIndex >= this.checklistIds.length) {
     // Tous les checklistIds ont été traités
     this.toastr.info('Toutes les checklists ont été traitées.', 'Info');
     return;
   }

   const nextChecklistId = this.checklistIds[this.currentIndex];
   this.router.navigate(['/dashboard/checklist/remlirCheck', nextChecklistId]);
 }
 
 
 


 

// Fonction pour initialiser les validationsInput avec des valeurs par défaut
initValidationsInput(): void {
 if (this.checklistVide) {
   this.checklistVide.lignes.forEach(ligne => {
     ligne.posagesDto.forEach(posage => {
       this.validationsInput.push({
         id: 0, // Remplacez 0 par l'ID réel si nécessaire
         ligneChecklistId: ligne.idDto,
         posageId: posage.idDto,
         validationType: null ,// Choisissez la valeur par défaut selon vos besoins
         validationType2:null
       });
     });
   });
 }
}
 // Fonction pour obtenir la TypeValidation sélectionnée pour un posage donné
 getTypeValidation(posageId: number): TypeValidation {
   const validationInput = this.validationsInput.find(input => input.posageId === posageId);
   return validationInput ? validationInput.validationType : TypeValidation.OK;
 }
 getTypeValidation2(posageId: number): TypeValidation2 {
   const validationInput = this.validationsInput.find(input => input.posageId === posageId);
   return validationInput ? validationInput.validationType2 : TypeValidation2.OK;
 }

 // Fonction pour mettre à jour la valeur de TypeValidation dans validationsInput
 updateValidationType(newValue: TypeValidation, posageId: number): void {
   const validationInputIndex = this.validationsInput.findIndex(input => input.posageId === posageId);
   if (validationInputIndex !== -1) {
     this.validationsInput[validationInputIndex].validationType = newValue;
   } else {
     // Ajouter une nouvelle entrée dans validationsInput si elle n'existe pas
     this.validationsInput.push({ id: 0, ligneChecklistId: 0, posageId, validationType: newValue,validationType2:null });
   }
 }
   // Fonction pour mettre à jour la valeur de TypeValidation dans validationsInput
   updateValidationType2(newValue: TypeValidation2, posageId: number): void {
     const validationInputIndex = this.validationsInput.findIndex(input => input.posageId === posageId);
     if (validationInputIndex !== -1) {
       this.validationsInput[validationInputIndex].validationType2 = newValue;
     } 
   }


/*
 
 completeChecklistForPlanning(): void {
   const userId = this.authService.getCurrentUserId(); // Récupérez l'ID de l'utilisateur connecté depuis le service
   const numericUserId = Number(userId); //convertir id string en number 
 
   console.log(numericUserId);
   
   if (!userId) {
     console.error('Impossible de récupérer l\'ID de l\'utilisateur connecté');
     return; // Arrête l'exécution de la fonction si l'ID de l'utilisateur est vide
   }
 
   if (!this.constats || !this.resteAfaire) {
     console.error('Veuillez remplir tous les champs avant de compléter la checklist.');
     this.toastr.error('Veuillez remplir tous les champs avant de compléter la checklist.', 'Erreur');
     
     return; // Arrête l'exécution de la fonction si les champs sont vides
   }
   const planningId = this.route.snapshot.params['planningId'];
 
   // Si tous les champs sont remplis, alors envoyer la requête au service pour compléter la checklist
   this.checklistService.completeChecklistForPlanning(numericUserId,planningId, { 
     validationsInput: this.validationsInput,
     constats: this.constats,
     resteAfaire: this.resteAfaire
   }).subscribe(
     response => {
       console.log('Checklist complétée avec succès');
       console.log(response);
       this.toastr.success('Checklist complétée avec succès', 'Succès');
       this.router.navigateByUrl('/dashboard/checklist/listcheckComplete');
     },
     error => {
       console.error('Erreur lors de la complétion de la checklist:', error);
       this.toastr.error(error.error.message, 'Erreur lors de la création du planning');
       this.toastr.error(error.error.message, 'Erreur lors de la complétion de la checklist');
       // Gérer l'erreur si nécessaire
     }
   );
 }

*/






updateChecklist(): void {
 this.checklistService.updateChecklistcomplete(this.checklistCompleteeId, this.validationsInput).subscribe(
   response => {
     console.log('Checklist mise à jour avec succès', response);
     // Traitez la réponse ou effectuez d'autres actions nécessaires
   },
   error => {
     console.error('Erreur lors de la mise à jour de la checklist', error);
     // Gérez l'erreur de manière appropriée
   }
 );
}





}
