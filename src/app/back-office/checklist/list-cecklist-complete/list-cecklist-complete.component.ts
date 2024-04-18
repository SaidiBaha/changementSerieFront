import { Component, OnInit } from '@angular/core';
import { ChecklistCompletee } from 'src/shared/models/ChecklistCompletee';
import { ChecklistService } from 'src/shared/services/checklist.service';

@Component({
  selector: 'app-list-cecklist-complete',
  templateUrl: './list-cecklist-complete.component.html',
  styleUrls: ['./list-cecklist-complete.component.css']
})
export class ListCecklistCompleteComponent implements OnInit{

  checklistCompletees: ChecklistCompletee[] = [];

  constructor(private checklistService: ChecklistService) { }

  ngOnInit(): void {
    const userId = 1; // pour le moment ba3d lazem nrodo dynamique
    this.getAllChecklistCompleteeByUserId(userId);
  }
  getAllChecklistCompleteeByUserId(userId: number): void {
    this.checklistService.getAllChecklistCompleteeByUserId(userId)
      .subscribe(checklistCompletees => {
        this.checklistCompletees = checklistCompletees;
    
      });
  }

}
