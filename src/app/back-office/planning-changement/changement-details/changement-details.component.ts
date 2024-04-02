import { Component, OnInit } from '@angular/core';
import { PlanningChangementSerie } from 'src/shared/models/PlanningChangementSerie ';
import { PlanningChangementSerieService } from 'src/shared/services/PlanningChangement.service';
import { NotificationDetailsComponent } from '../notification-details/notification-details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-changement-details',
  templateUrl: './changement-details.component.html',
  styleUrls: ['./changement-details.component.css']
})
export class ChangementDetailsComponent implements OnInit {
  plannings: PlanningChangementSerie[] = [];
 

  constructor(private planningService: PlanningChangementSerieService, private dialog: MatDialog,) {}
  ngOnInit(): void {
    this.loadlistPlannings();
  }

  openDetails(planning: PlanningChangementSerie) {
    this.dialog.open(NotificationDetailsComponent, {
      data: { planning: planning }
    });
  }


  loadlistPlannings(): void {
    this.planningService.getAllPlannings().subscribe({
      next: (data) => {
        this.plannings = data;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }

}
