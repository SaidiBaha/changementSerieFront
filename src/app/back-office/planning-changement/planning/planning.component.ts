import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PlanningChangementSerie } from 'src/shared/models/PlanningChangementSerie ';
import { PlanningChangementSerieService } from 'src/shared/services/PlanningChangement.service';
import { NotificationDetailsComponent } from '../notification-details/notification-details.component';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {
  plannings: PlanningChangementSerie[] = [];
  dataSource!: MatTableDataSource<PlanningChangementSerie>;
  searchDataValue = '';

  // Pagination variables
  public pageSize: number = 10;
  public totalData: number = 0;
  public currentPage: number = 1;
  public pageNumberArray: Array<number> = [];
  public totalPages: number = 0;

  constructor(
    private planningChangementSerieService: PlanningChangementSerieService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadPlannings();
  }

  loadPlannings(): void {
    this.planningChangementSerieService.getAllPlannings().subscribe({
      next: (data) => {
        this.totalData = data.length;
        this.calculateTotalPages(this.totalData, this.pageSize);
        this.updateDataSource(data);
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
      return data.titreDto.toLowerCase().includes(filter) ||
             data.descriptionDto.toLowerCase().includes(filter);
    };
  }

  public searchData(value: any): void {
    this.dataSource.filter = value.trim().toLowerCase();
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

  navigateToAddCahngement(): void {
    this.router.navigate(['/dashboard/planning-changement/addPlanning']);
  }

  openDetails(planning: PlanningChangementSerie) {
    this.dialog.open(NotificationDetailsComponent, {
      data: { planning: planning }
    });
  }





}
