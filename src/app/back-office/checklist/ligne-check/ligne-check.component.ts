import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { LigneCheck } from 'src/shared/models/LigneCheck';
import { ChecklistSharedService } from 'src/shared/services/ChecklistShared.service';
import { LigneChecklistService } from 'src/shared/services/LigneCheck.service';

@Component({
  selector: 'app-ligne-check',
  templateUrl: './ligne-check.component.html',
  styleUrls: ['./ligne-check.component.css']
})
export class LigneCheckComponent implements OnInit {
  ligneChecklists: LigneCheck[] = [];
  //private staticChecklistId: number = 18;
 // @Input() checklistId: number;
  checklistId: number | null = null;

  constructor(private ligneChecklistService: LigneChecklistService,
    private checklistSharedService: ChecklistSharedService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.checklistSharedService.currentChecklistId.subscribe(
      (id) => {
        this.checklistId = id;
        if (this.checklistId) {
          this.getLigneChecklistsByChecklistId(this.checklistId);
        }
      }
    );
  }



  
  /*
  navigateToEditLigneCheck(id: number): void {
    this.router.navigate(['/dashboard/checklist/ligneCheck', this.checklistId, 'edit', id]);
  }*/
  navigateToAddLigneCheck(): void {
    this.router.navigate(['/dashboard/checklist/ligneCheck', this.checklistId, 'add']);
  }
  
  navigateToEditLigneCheck(id: number): void {
    this.router.navigate(['/dashboard/checklist/ligneCheck', this.checklistId, 'edit', id]);
  }
  navigateToChecklistDetails(id: number): void {
    this.router.navigate(['/dashboard/checklist/checklistDetails', id]);
  }
  
  
  
  

  getLigneChecklistsByChecklistId(id: number): void {
    this.ligneChecklistService.findByChecklistId(id).subscribe(
      (data) => {
        this.ligneChecklists = data;
      },
      (error) => {
        console.error('Error fetching ligneChecklists by checklist ID', error);
      }
    );
  }

  deleteLigneChecklist(id: number): void {
    this.ligneChecklistService.deleteLigneChecklist(id).subscribe(
      () => {
        this.ligneChecklists = this.ligneChecklists.filter((ligne) => ligne.idDto !== id);
      },
      (error) => {
        console.error('Error deleting ligneChecklist', error);
      }
    );
  }

}
