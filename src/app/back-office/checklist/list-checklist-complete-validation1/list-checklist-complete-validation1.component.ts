import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChecklistCompletee } from 'src/shared/models/ChecklistCompletee';
import { ChecklistCompleteeIds } from 'src/shared/models/ChecklistCompleteeIds';
import { PlanningChangementSerieService } from 'src/shared/services/PlanningChangement.service';
import { ChecklistService } from 'src/shared/services/checklist.service';

@Component({
  selector: 'app-list-checklist-complete-validation1',
  templateUrl: './list-checklist-complete-validation1.component.html',
  styleUrls: ['./list-checklist-complete-validation1.component.css']
})
export class ListChecklistCompleteValidation1Component implements OnInit{
  checklistCompletees: ChecklistCompletee[] = [];
  planningId!: number;
  isUpdateInProgress: boolean = false;

  currentChecklistCompleteeId: number | null = null;
  disabledChecklistIds: number[] = [];

  constructor(private checklistService: ChecklistService,
    private route: ActivatedRoute,
    private planningService:PlanningChangementSerieService,
               private router: Router
  ) { }


  ngOnInit(): void {
    
    
    this.planningId = this.route.snapshot.params['id'];
    this.checklistService.getAllChecklistCompleteeByPlanningId(this.planningId)
    .subscribe(checklistCompletees => {
      this.checklistCompletees = checklistCompletees;
  
    });
    this.planningService.getIsUpdateInProgress().subscribe((value: boolean) => {
      this.isUpdateInProgress = value;
    });
   
   
  }

  getAllChecklistCompleteeByPlanningId(planningId: number): void {
    this.checklistService.getAllChecklistCompleteeByPlanningId(planningId)
      .subscribe(checklistCompletees => {
        this.checklistCompletees = checklistCompletees;
    
      });
  }



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
        this.disabledChecklistIds.push(checklistCompleteeId);
      },
      error => {
        console.error('Error fetching IDs:', error);
      }
    );
  } else {
    console.error('ChecklistCompletee ID is undefined or null');
  }
}
isChecklistDisabled(checklistCompleteeId: number): boolean {
  return this.disabledChecklistIds.includes(checklistCompleteeId);
}

}
