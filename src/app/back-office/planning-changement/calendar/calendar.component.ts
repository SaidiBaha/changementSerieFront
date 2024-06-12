import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { PlanningChangementSerie } from 'src/shared/models/PlanningChangementSerie ';
import { PlanningChangementSerieService } from 'src/shared/services/PlanningChangement.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    events: []
  };

  constructor(private planningService: PlanningChangementSerieService,
              private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPlannings();
  }

  loadPlannings(): void {
    this.planningService.getAllPlannings().subscribe({
      next: (plannings: PlanningChangementSerie[]) => {
        const events = plannings.map(planning => ({
          title: planning.titreDto,
          start: planning.debutDto,
          end: planning.finDto
        }));
        this.calendarOptions.events = events;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des plannings:', error);
      }
    });
  }
  navigateToAddCahngement(): void {
    this.router.navigate(['/dashboard/planning-changement/addPlanning']);

  }

}
