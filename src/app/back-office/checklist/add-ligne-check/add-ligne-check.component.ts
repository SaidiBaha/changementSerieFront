import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LigneCheck } from 'src/shared/models/LigneCheck';
import { LigneChecklistService } from 'src/shared/services/LigneCheck.service';

@Component({
  selector: 'app-add-ligne-check',
  templateUrl: './add-ligne-check.component.html',
  styleUrls: ['./add-ligne-check.component.css']
})
export class AddLigneCheckComponent implements OnInit {
  ligneCheck: LigneCheck = new LigneCheck();
  checklistId: number;

  constructor(
    private ligneChecklistService: LigneChecklistService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.checklistId = +params['checklistId'];
      const ligneCheckId = +params['id'];
      if (ligneCheckId) {
        this.loadLigneCheck(ligneCheckId);
      }
    });
  }

  loadLigneCheck(id: number): void {
    this.ligneChecklistService.getLigneChecklistById(id).subscribe({
      next: (data) => {
        this.ligneCheck = data;
      },
      error: (err) => {
        console.error('Error fetching ligneCheck:', err);
      }
    });
  }

  

  saveLigneCheck(): void {
    if (this.ligneCheck.idDto) {
      this.ligneChecklistService.updateLigneChecklist(this.ligneCheck.idDto, this.ligneCheck).subscribe({
        next: () => {
          this.router.navigate(['/dashboard/checklist/ligneCheck', this.checklistId]);
        },
        error: (err) => {
          console.error('Error updating ligneCheck:', err);
        }
      });
    } else {
      this.ligneChecklistService.createLigneChecklist(this.ligneCheck, this.checklistId).subscribe({
        next: () => {
          this.router.navigate(['/dashboard/checklist/ligneCheck', this.checklistId]);
        },
        error: (err) => {
          console.error('Error creating ligneCheck:', err);
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/dashboard/checklist/ligneCheck', this.checklistId]);
  }

}
