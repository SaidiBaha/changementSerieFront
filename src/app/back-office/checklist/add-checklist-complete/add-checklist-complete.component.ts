import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ChecklistCompletee } from 'src/shared/models/ChecklistCompletee';
import { ChecklistVide } from 'src/shared/models/ChecklistVide';
import { TypeValidation, ValidationsInput } from 'src/shared/models/ValidationsInput';
import { AuthentificationService } from 'src/shared/services/authentification.service';
import { ChecklistService } from 'src/shared/services/checklist.service';


@Component({
  selector: 'app-add-checklist-complete',
  templateUrl: './add-checklist-complete.component.html',
  styleUrls: ['./add-checklist-complete.component.css']
})
export class AddChecklistCompleteComponent implements OnInit{
  userId: number; // Propriété pour stocker l'ID de l'utilisateur connecté
  planningId: number=10; // Initialiser la valeur de planningId
  constats: string;
  resteAfaire: string;
  validationsInput: ValidationsInput[] = []; 
  checklistVide: ChecklistVide | null = null; // Propriété pour stocker les détails de la checklist
  

  constructor(private checklistService: ChecklistService,
              private authService: AuthentificationService,
              private router: Router ) { }
  
  
  ngOnInit(): void {
    
    const userId = this.authService.getCurrentUserId(); // Récupérez l'ID de l'utilisateur connecté depuis le service
    const numericUserId = Number(userId);
    const checklistId = 44; // Remplacez 1 par l'ID de la checklist que vous souhaitez afficher
    this.checklistService.getChecklistDetailsForUser(numericUserId, checklistId).subscribe(
      (details: ChecklistVide) => {
        this.checklistVide = details;
        // Initialisation des validationsInput avec des valeurs par défaut
        this.initValidationsInput();
      },
      error => {
        console.error('Erreur lors de la récupération des détails de la checklist:', error);
      }
    );
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
          validationType: TypeValidation.OK // Choisissez la valeur par défaut selon vos besoins
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



  
  completeChecklistForPlanning(): void {
    const userId = this.authService.getCurrentUserId(); // Récupérez l'ID de l'utilisateur connecté depuis le service
    const numericUserId = Number(userId); //convertir id string en number 

    console.log(numericUserId)
    if (userId) {
      this.checklistService.completeChecklistForPlanning(numericUserId, this.planningId, { 
        validationsInput: this.validationsInput,
        constats: this.constats,
        resteAfaire: this.resteAfaire
      }).subscribe(
        response => {
          console.log('Checklist complétée avec succès');
          console.log(response)

          this.router.navigateByUrl('/dashboard/checklist/listcheckComplete');
        },
        error => {
          console.error('Erreur lors de la complétion de la checklist:', error);
          // Gérer l'erreur si nécessaire
        }
      );
    } else {
      console.error('Impossible de récupérer l\'ID de l\'utilisateur connecté');
    }
  }

}
