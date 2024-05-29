import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChecklistCompletee } from 'src/shared/models/ChecklistCompletee';
import { ChecklistCompleteeIds } from 'src/shared/models/ChecklistCompleteeIds';
import { ChecklistService } from 'src/shared/services/checklist.service';

@Component({
  selector: 'app-list-checklist-complete-validation1',
  templateUrl: './list-checklist-complete-validation1.component.html',
  styleUrls: ['./list-checklist-complete-validation1.component.css']
})
export class ListChecklistCompleteValidation1Component implements OnInit{
  checklistCompletees: ChecklistCompletee[] = [];

  constructor(private checklistService: ChecklistService,
               private router: Router
  ) { }


  ngOnInit(): void {
    const planningId = 24;
    
    this.getAllChecklistCompleteeByPlanningId(planningId)  // pour le moment ba3d lazem nrodo dynamique

   
  }

  getAllChecklistCompleteeByPlanningId(planningId: number): void {
    this.checklistService.getAllChecklistCompleteeByPlanningId(planningId)
      .subscribe(checklistCompletees => {
        this.checklistCompletees = checklistCompletees;
    
      });
  }


 /* navigateToChecklistValidation2(id: number): void {
    console.log('Checklist ID:', id);
    if (id !== undefined && id !== null) {
        console.log("Navigation vers l'ID", id);
        this.router.navigate(['/dashboard/checklist/addChecklistVal2', id]);
    } else {
        console.error('Checklist ID is undefined or null');
    }
}*/

/*
navigateToChecklistValidation2(checklistCompleteeId: number): void {
  console.log('ChecklistCompletee ID:', checklistCompleteeId);
  if (checklistCompleteeId !== undefined && checklistCompleteeId !== null) {
    this.checklistService.getChecklistCompleteeIds(checklistCompleteeId).subscribe(
      ids => {
        console.log("Navigation vers l'ID de Checklist:", ids.checklistId, "et l'ID de PlanningChangementSerie:", ids.planningChangementSerieId);
        this.router.navigate(['/dashboard/checklist/addChecklistVal2', ids.checklistId, { planningId: ids.planningChangementSerieId }]);
      },
      error => {
        console.error('Error fetching IDs:', error);
      }
    );
  } else {
    console.error('ChecklistCompletee ID is undefined or null');
  }
}*/


navigateToChecklistValidation2(checklistCompleteeId: number): void {
  console.log('ChecklistCompletee ID:', checklistCompleteeId);
  if (checklistCompleteeId !== undefined && checklistCompleteeId !== null) {
    this.checklistService.getChecklistCompleteeIds(checklistCompleteeId).subscribe(
      ids => {
        console.log("Navigation vers l'ID de ChecklistCompletee:", ids.checklistCompleteeId, 
                    "Checklist ID:", ids.checklistId, 
                    "et l'ID de PlanningChangementSerie:", ids.planningId);
        this.router.navigate(
          ['/dashboard/checklist/addChecklistVal2', ids.checklistCompleteeId, ids.checklistId],
          { queryParams: { planningId: ids.planningId } }
        );
      },
      error => {
        console.error('Error fetching IDs:', error);
      }
    );
  } else {
    console.error('ChecklistCompletee ID is undefined or null');
  }
}



}
