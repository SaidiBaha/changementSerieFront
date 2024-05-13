import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ChecklistCompletee } from 'src/shared/models/ChecklistCompletee';
import { ChecklistVide } from 'src/shared/models/ChecklistVide';
import { TypeValidation, ValidationsInput } from 'src/shared/models/ValidationsInput';
import { PlanningChangementSerieService } from 'src/shared/services/PlanningChangement.service';
import { AuthentificationService } from 'src/shared/services/authentification.service';
import { ChecklistService } from 'src/shared/services/checklist.service';


@Component({
  selector: 'app-add-checklist-complete',
  templateUrl: './add-checklist-complete.component.html',
  styleUrls: ['./add-checklist-complete.component.css']
})
export class AddChecklistCompleteComponent implements OnInit{
  userId: number; // Propriété pour stocker l'ID de l'utilisateur connecté
  planningId: number; // Initialiser la valeur de planningId
  constats: string;
  resteAfaire: string;
  validationsInput: ValidationsInput[] = []; 
  checklistVide: ChecklistVide | null = null; // Propriété pour stocker les détails de la checklist

  checklistId: number;
  checklistIds: number[] = [];
  currentIndex: number = 0;
 // planningId: number;

 checklistRemplie: boolean = false;
  

  constructor(private checklistService: ChecklistService,
              private planningService:PlanningChangementSerieService,
              private authService: AuthentificationService,
              private router: Router ,
              private route: ActivatedRoute,
              private toastr: ToastrService ) { }
  
  
 /* ngOnInit(): void {
    
    const userId = this.authService.getCurrentUserId(); // Récupérez l'ID de l'utilisateur connecté depuis le service
    const numericUserId = Number(userId);
    console.log(this.checklistId)
   // const checklistId = 1; // Remplacez 1 par l'ID de la checklist que vous souhaitez afficher
    this.checklistService.getChecklistDetailsForUser(numericUserId, this.checklistId).subscribe(
      (details: ChecklistVide) => {
        this.checklistVide = details;
        // Initialisation des validationsInput avec des valeurs par défaut
        this.initValidationsInput();
      },
      error => {
        console.error('Erreur lors de la récupération des détails de la checklist:', error);
      }
    );
  }*/
  ngOnInit(): void {
   // const userId = this.authService.getCurrentUserId();
    //const numericUserId = Number(userId);
  
    this.route.params.subscribe(params => {
      this.checklistId = params['checklistId'];
      console.log(this.checklistId); // Vérifiez la valeur de checklistId
      // Continuez avec votre logique pour charger les détails de la checklist
      this.loadChecklistDetails();
    });
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
          validationType: null // Choisissez la valeur par défaut selon vos besoins
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

  // Fonction pour mettre à jour la valeur de TypeValidation dans validationsInput
  updateValidationType(newValue: TypeValidation, posageId: number): void {
    const validationInputIndex = this.validationsInput.findIndex(input => input.posageId === posageId);
    if (validationInputIndex !== -1) {
      this.validationsInput[validationInputIndex].validationType = newValue;
    } else {
      // Ajouter une nouvelle entrée dans validationsInput si elle n'existe pas
      this.validationsInput.push({ id: 0, ligneChecklistId: 0, posageId, validationType: newValue });
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
completeChecklistForPlanning(): void {
  // Désactiver le bouton après le premier clic
  this.checklistRemplie = true;
  
  // Vérifier si au moins une option de TypeValidation est sélectionnée
  if (this.validationsInput.some(input => input.validationType === null)) {
    // Afficher un message d'erreur
    this.toastr.error('Veuillez sélectionner une option de validation pour tous les posages.', 'Erreur');
    // Réactiver le bouton en cas d'erreur
    this.checklistRemplie = false;
    return;
  }

  const userId = this.authService.getCurrentUserId();
  const numericUserId = Number(userId);

  if (!userId) {
    console.error('Impossible de récupérer l\'ID de l\'utilisateur connecté');
    // Réactivez le bouton en cas d'erreur
    this.checklistRemplie = false;
    return;
  }

  if (!this.constats || !this.resteAfaire) {
    console.error('Veuillez remplir tous les champs avant de compléter la checklist.');
    this.toastr.error('Veuillez remplir tous les champs avant de compléter la checklist.', 'Erreur');
    // Réactivez le bouton en cas d'erreur
    this.checklistRemplie = false;
    return;
  }

  this.checklistService.completeChecklistForPlanning(numericUserId, this.planningId, { 
    validationsInput: this.validationsInput,
    constats: this.constats,
    resteAfaire: this.resteAfaire
  }).subscribe(
    response => {
      console.log('Checklist complétée avec succès');
      console.log(response);
      this.toastr.success('Checklist complétée avec succès', 'Succès');
      
      // Mettre à jour l'index pour passer au prochain checklistId
      this.currentIndex++;

      // Après avoir complété la checklist, naviguer à la prochaine checklist si elle existe
      this.launchChangementProcess();

      // Réactivez le bouton après la navigation
      this.checklistRemplie = false;
     // this.router.navigateByUrl('/dashboard/checklist/listcheckComplete');
    },
    error => {
      console.error('Erreur lors de la complétion de la checklist:', error);
      this.toastr.error(error.error.message, 'Erreur lors de la création du planning');
      this.toastr.error(error.error.message, 'Erreur lors de la complétion de la checklist');
      // Réactivez le bouton en cas d'erreur
      this.checklistRemplie = false;
      // Gérer l'erreur si nécessaire
    }
  );
}




}