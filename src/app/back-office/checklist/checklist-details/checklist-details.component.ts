import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Checklist } from 'src/shared/models/Checklist';
import { LigneCheck } from 'src/shared/models/LigneCheck';
import { LigneChecklistService } from 'src/shared/services/LigneCheck.service';
import { ChecklistService } from 'src/shared/services/checklist.service';


@Component({
  selector: 'app-checklist-details',
  templateUrl: './checklist-details.component.html',
  styleUrls: ['./checklist-details.component.css']
})
export class ChecklistDetailsComponent implements OnInit {
  checklist: Checklist;
  ligneChecklists: LigneCheck[] = [];

  constructor(
    private checklistService: ChecklistService,
    private ligneChecklistService: LigneChecklistService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const checklistId = this.route.snapshot.params['id'];
    this.checklistService.getChecklistById(checklistId).subscribe(data => {
      this.checklist = data;
    });
    this.ligneChecklistService.findByChecklistId(checklistId).subscribe(data => {
      this.ligneChecklists = data;
    });
  }
}
