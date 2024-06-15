import { Component, OnInit } from '@angular/core';
import { PlanningChangementSerie } from 'src/shared/models/PlanningChangementSerie ';
import { PlanningChangementSerieService } from 'src/shared/services/PlanningChangement.service';
import { NotificationDetailsComponent } from '../notification-details/notification-details.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-changement-details',
  templateUrl: './changement-details.component.html',
  styleUrls: ['./changement-details.component.css']
})
export class ChangementDetailsComponent implements OnInit {
  plannings: PlanningChangementSerie[] = [];
  dataSource!: MatTableDataSource<PlanningChangementSerie>;
  searchDataValue = '';
  startDate: Date | null = null;
  endDate: Date | null = null;

  // Pagination variables
  public pageSize: number = 10;
  public totalData: number = 0;
  public currentPage: number = 1;
  public pageNumberArray: Array<number> = [];
  public totalPages: number = 0;

  constructor(
    private planningService: PlanningChangementSerieService,
    private router: Router,
    private toastr: ToastrService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.loadlistPlannings();
  }

  loadlistPlannings(): void {
    this.planningService.getAllPlannings().subscribe({
      next: (data) => {
        this.totalData = data.length;
        this.calculateTotalPages(this.totalData, this.pageSize);
        this.plannings = data;
        let count = 0;
        this.plannings.forEach(planning => {
          this.planningService.getAvancementTotal(planning.idDto).subscribe({
            next: (avancement) => {
              planning.avancement = avancement; // Ajouter l'avancement au planning
              count++;
              if (count === this.plannings.length) {
                // Une fois que toutes les requêtes pour l'avancement sont terminées, mettre à jour la source de données
                this.updateDataSource(this.plannings);
              }
            },
            error: (error) => {
              console.error('Erreur lors de la récupération de l\'avancement:', error);
              count++;
              if (count === this.plannings.length) {
                // Une fois que toutes les requêtes pour l'avancement sont terminées, mettre à jour la source de données
                this.updateDataSource(this.plannings);
              }
            }
          });
        });
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }
  
  updateDataSource(data: PlanningChangementSerie[]): void {
    this.plannings = data;
    this.dataSource = new MatTableDataSource<PlanningChangementSerie>(this.plannings.slice(0, this.pageSize));
    this.dataSource.filterPredicate = (data, filter) => {
      const matchesSearch = data.titreDto.toLowerCase().includes(filter) ||
                            data.descriptionDto.toLowerCase().includes(filter);
      const matchesStartDate = !this.startDate || new Date(data.debutDto) >= this.startDate;
      const matchesEndDate = !this.endDate || new Date(data.finDto) <= this.endDate;
      return matchesSearch && matchesStartDate && matchesEndDate;
    };
  }

  public searchData(value: any): void {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  public filterByDate(): void {
    this.dataSource.filter = this.searchDataValue.trim().toLowerCase();
  }

  public getMoreData(event: string): void {
    if (event == 'next' && this.currentPage < this.totalPages) {
      this.currentPage++;
    } else if (event == 'previous' && this.currentPage > 1) {
      this.currentPage--;
    }
    this.updatePageData();
  }

  public moveToPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.updatePageData();
  }

  public changePageSize(): void {
    this.calculateTotalPages(this.totalData, this.pageSize);
    this.currentPage = 1;
    this.updatePageData();
  }

  private updatePageData(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.dataSource.data = this.plannings.slice(start, end);
  }

  private calculateTotalPages(totalData: number, pageSize: number): void {
    this.pageNumberArray = [];
    this.totalPages = Math.ceil(totalData / pageSize);
    for (let i = 1; i <= this.totalPages; i++) {
      this.pageNumberArray.push(i);
    }
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

  navigateTolistCheckValidation1(planningId: number): void {
    console.log("id :", planningId)
    this.router.navigate(['/dashboard/checklist/listcheckVal1', planningId]);
  }

}
