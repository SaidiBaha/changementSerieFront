import { Component, OnInit } from '@angular/core';
import { Testeur } from 'src/shared/models/Testeur';
import { TesteurService } from 'src/shared/services/testeur.service';

@Component({
  selector: 'app-testeur',
  templateUrl: './testeur.component.html',
  styleUrls: ['./testeur.component.css']
})
export class TesteurComponent implements OnInit {
  testeurs: Testeur[] = [];

  constructor(private testeurService: TesteurService) { }

  ngOnInit(): void {
    this.getTesteurs();
  }

  getTesteurs(): void {
    this.testeurService.getAllTesteurs().subscribe(
      (data) => {
        this.testeurs = data;
      },
      (error) => {
        console.error('Error fetching testeurs', error);
      }
    );
  }

  deleteTesteur(id: number): void {
    this.testeurService.deleteTesteur(id).subscribe(
      () => {
        this.testeurs = this.testeurs.filter((testeur) => testeur.idDto !== id);
      },
      (error) => {
        console.error('Error deleting testeur', error);
      }
    );
  }



}
