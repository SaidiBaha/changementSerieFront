import { Component, OnInit } from '@angular/core';
import { Tache } from 'src/shared/models/Tache';
import { TacheService } from 'src/shared/services/tache.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit{
  taches: Tache[] = [];

  constructor(private tacheService: TacheService) { }
  ngOnInit(): void {
    this.loadTaches();
  }
  loadTaches(): void {
    this.tacheService.getAllTaches().subscribe(
      (data) => {
        this.taches = data;
      },
      (error) => {
        console.error('Une erreur s\'est produite lors du chargement des tâches : ', error);
      }
    );
  }


}
