import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Checklist } from 'src/shared/models/Checklist';
import { ChecklistSharedService } from 'src/shared/services/ChecklistShared.service';
import { ChecklistService } from 'src/shared/services/checklist.service';

@Component({
  selector: 'app-list-checklist',
  templateUrl: './list-checklist.component.html',
  styleUrls: ['./list-checklist.component.css']
})
export class ListChecklistComponent implements OnInit{


  checklists: Checklist[] = [];

  constructor(private checklistService: ChecklistService,
     private router: Router,
     private checklistSharedService: ChecklistSharedService
     ) {}

  ngOnInit(): void {
    this.loadChecklists();
  }

  loadChecklists(): void {
    this.checklistService.getAllChecklists().subscribe({
      next: (data) => {
        this.checklists = data;
      },
      error: (err) => {
        console.error('Error fetching checklists:', err);
      }
    });
  }

  navigateToChecklistDetails(id: number): void {
    this.router.navigate(['/dashboard/checklist/checklistDetails', id]);
  }
  

  navigateToAddChecklist(): void {
   
    this.router.navigate(['/dashboard/checklist/addCheck']);
  }

  navigateToEditChecklist(id: number): void {
    this.checklistSharedService.changeChecklistId(id);
    this.router.navigate(['/dashboard/checklist/addCheck', id]);
  }

  deleteChecklist(id: number): void {
    this.checklistService.deleteChecklist(id).subscribe({
      next: () => {
        this.loadChecklists(); // Reload the checklists after deletion
      },
      error: (err) => {
        console.error('Error deleting checklist:', err);
      }
    });
  }

}
