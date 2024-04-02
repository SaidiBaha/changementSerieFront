import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanningInfoDto } from 'src/shared/models/PlanningInfo';
import { PlanningChangementSerieService } from 'src/shared/services/PlanningChangement.service';

@Component({
  selector: 'app-changementinfo',
  templateUrl: './changementinfo.component.html',
  styleUrls: ['./changementinfo.component.css']
})
export class ChangementinfoComponent implements OnInit {


  planningInfo: PlanningInfoDto | undefined;

  constructor(
    private route: ActivatedRoute,
    private planningService: PlanningChangementSerieService
  ) {}

  ngOnInit(): void {
    const planningId = this.route.snapshot.params['id'];
    this.planningService.getPlanningInfo(planningId).subscribe({
      next: (data) => {
        this.planningInfo = data;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }

}
