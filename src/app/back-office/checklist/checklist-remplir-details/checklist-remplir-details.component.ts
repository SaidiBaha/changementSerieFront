import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ChecklistVide } from 'src/shared/models/ChecklistVide';
import { ValidationsInput } from 'src/shared/models/ValidationsInput';
import { PlanningChangementSerieService } from 'src/shared/services/PlanningChangement.service';
import { AuthentificationService } from 'src/shared/services/authentification.service';
import { ChecklistService } from 'src/shared/services/checklist.service';

@Component({
  selector: 'app-checklist-remplir-details',
  templateUrl: './checklist-remplir-details.component.html',
  styleUrls: ['./checklist-remplir-details.component.css']
})
export class ChecklistRemplirDetailsComponent implements OnInit{

  userId: number; // Propriété pour stocker l'ID de l'utilisateur connecté
  id: number; // Initialiser la valeur de planningId
  constats: string;
  resteAfaire: string;
  validationsInput: ValidationsInput[] = []; 
  checklistVide: ChecklistVide | null = null; // Propriété pour stocker les détails de la checklist
  planningId: number  ;
  checklistCompleteeId: number=110;  // hedha thot id mawjoud 3andik f base 
  checklistId: number=1;
  checklistIds: number[] = [];
  currentIndex: number = 0;
  checklistRemplie: boolean = false;

  checklistCompleteDetails: any;

  constructor(private checklistService: ChecklistService,
    private router: Router,
    private planningService:PlanningChangementSerieService,
    private authService: AuthentificationService,
    private route: ActivatedRoute,
    private toastr: ToastrService 
) { }


  ngOnInit(): void {
   //this.loadChecklistDetails();
  // this.loadChecklistCompleteDetails();
  //const checklistCompleteId = 20; // pour le moment, rendre cela dynamique si nécessaire
  this.getChecklistCompleteDetails();
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
        this.planningId = this.checklistVide.checklist.planningDto.idDto; // Assigner la valeur de planningId
      
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
 

 
  loadChecklistCompleteDetails(): void {
    this.checklistService.getChecklistCompleteDetails(this.checklistCompleteeId).subscribe(
      (data: any) => {
        this.checklistCompleteDetails = data;
        console.log(this.checklistCompleteDetails);
      },
      error => {
        console.error('Error loading checklist details', error);
        this.toastr.error('Error loading checklist details.');
      }
    );
  }*/
  
  
  
 
 
  
 


 getChecklistCompleteDetails(): void {
  this.checklistService.getChecklistCompleteDetails(this.checklistCompleteeId).subscribe(
    details => {
      this.checklistCompleteDetails = details;
      console.log('Received Checklist Complete Details:', details);
    },
    error => {
      console.error('Error fetching checklist complete details:', error);
    }
  );
}


}
