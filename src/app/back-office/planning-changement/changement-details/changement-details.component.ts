import { Component, OnInit } from '@angular/core';
import { PlanningChangementSerie } from 'src/shared/models/PlanningChangementSerie ';
import { PlanningChangementSerieService } from 'src/shared/services/PlanningChangement.service';
import { NotificationDetailsComponent } from '../notification-details/notification-details.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-changement-details',
  templateUrl: './changement-details.component.html',
  styleUrls: ['./changement-details.component.css']
})
export class ChangementDetailsComponent implements OnInit {
  plannings: PlanningChangementSerie[] = [];
  
 

  constructor(private planningService: PlanningChangementSerieService,
                private router: Router,
                private toastr: ToastrService,
                private dialog: MatDialog,) {}
  ngOnInit(): void {
    this.loadlistPlannings();
  }




  loadlistPlannings(): void {
    this.planningService.getAllPlannings().subscribe({
      next: (data) => {
        this.plannings = data;
        this.plannings.forEach(planning => {
          this.planningService.getAvancementTotal(planning.idDto).subscribe({
            next: (avancement) => {
              planning.avancement = avancement; // Ajouter l'avancement au planning
            },
            error: (error) => {
              console.error('Erreur lors de la récupération de l\'avancement:', error);
            }
          });
        });
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }



  launchChangementProcess(planningId: number): void {
    this.planningService.getChecklistIdsByPlanningId(planningId).subscribe({
      next: (checklistIds: number[]) => {
        if (checklistIds && checklistIds.length > 0) {
          const firstChecklistId = checklistIds[0];
          this.router.navigate(['/dashboard/checklist/remlirCheck', firstChecklistId]);
        } else {
          // Gérer le cas où aucun checklistId n'est trouvé
        }
      },
      error: (error) => {
        console.error('Erreur lors de la récupération de checklistIds:', error);
        // Gérer l'erreur
      }
    });
  }

  navigateTolistCheckValidation1(planningId: number):void{
    console.log("id :",planningId)

    this.router.navigate(['/dashboard/checklist/listcheckVal1', planningId]);
  }

}
