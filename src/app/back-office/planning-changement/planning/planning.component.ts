import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanningChangementSerie } from 'src/shared/models/PlanningChangementSerie ';
import { PlanningChangementSerieService } from 'src/shared/services/PlanningChangement.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {
  plannings: PlanningChangementSerie[] = [];

  constructor(private planningChangementSerieService: PlanningChangementSerieService,
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

}
