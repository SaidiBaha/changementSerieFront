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
  showProgress: boolean = false;
  showChart: boolean = false;
  planningId!: number;


  constructor(
    private route: ActivatedRoute,
    private planningService: PlanningChangementSerieService
  ) {}

  ngOnInit(): void {
    this.planningId = this.route.snapshot.params['id'];
    this.planningService.getPlanningInfo(this.planningId).subscribe({
      next: (data) => {
        this.planningInfo = data;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }


  showProgressChangement(): void {
    this.showProgress = true;
    this.showChart = false;
  }

  showChartChangementSerie(): void {
    this.showProgress = false;
    this.showChart = true;
  }

}
