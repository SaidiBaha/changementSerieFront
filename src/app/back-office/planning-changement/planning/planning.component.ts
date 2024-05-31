import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PlanningChangementSerie } from 'src/shared/models/PlanningChangementSerie ';
import { PlanningChangementSerieService } from 'src/shared/services/PlanningChangement.service';
import { NotificationDetailsComponent } from '../notification-details/notification-details.component';


@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {
  plannings: PlanningChangementSerie[] = [];

  constructor(private planningChangementSerieService: PlanningChangementSerieService,
    private dialog: MatDialog,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loadPlannings();
  }

  loadPlannings(): void {
    this.planningChangementSerieService.getAllPlannings().subscribe({
      next: (data) => {
        this.plannings = data;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }


  navigateToAddCahngement(): void {
    this.router.navigate(['/dashboard/planning-changement/addPlanning']);

  }

  openDetails(planning: PlanningChangementSerie) {
    this.dialog.open(NotificationDetailsComponent, {
      data: { planning: planning }
    });
  }






}
