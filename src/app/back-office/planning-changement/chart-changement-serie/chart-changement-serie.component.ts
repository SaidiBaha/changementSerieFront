import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { PlanningChangementSerieService } from 'src/shared/services/PlanningChangement.service';

@Component({
  selector: 'app-chart-changement-serie',
  templateUrl: './chart-changement-serie.component.html',
  styleUrls: ['./chart-changement-serie.component.css']
})
export class ChartChangementSerieComponent implements OnInit {

      constructor(private planningservice:PlanningChangementSerieService,
        private route: ActivatedRoute,
      ) {   Chart.register(...registerables);}

      
  ngOnInit(): void {
    const planningId = this.route.snapshot.params['id'];
    this.fetchDataAndCreateCharts(planningId);
  }

 /* createDoughnutChart(chartId: string, labels: string[], data: number[]): void {
    new Chart(chartId, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          label: '# of Votes',
          data: data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            enabled: true,
          }
        }
      }
    });
  }*/

  fetchDataAndCreateCharts(planningId: number): void {
    this.planningservice.getAvancementChecklistValidation1(planningId).subscribe(pourcentage1 => {
      this.createDoughnutChart('myChart1', 'Validation 1', pourcentage1);
    });

    this.planningservice.getAvancementChecklistValidation2(planningId).subscribe(pourcentage2 => {
      this.createDoughnutChart('myChart2', 'Validation 2', pourcentage2);
    });

    this.planningservice.getAvancementTotal(planningId).subscribe(pourcentageTotal => {
      this.createDoughnutChart('myChart3', 'Total', pourcentageTotal);
    });
  }
  createDoughnutChart(chartId: string, label: string, percentage: number): void {
    new Chart(chartId, {
      type: 'doughnut',
      data: {
        labels: [label, 'Reste'],
        datasets: [{
          data: [percentage, 100 - percentage],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            enabled: true,
          }
        }
      }
    });
  }
}
