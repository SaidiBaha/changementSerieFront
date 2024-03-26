import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posage } from 'src/shared/models/Posage';
import { PosageService } from 'src/shared/services/posage.service';

@Component({
  selector: 'app-list-posage',
  templateUrl: './list-posage.component.html',
  styleUrls: ['./list-posage.component.css']
})
export class ListPosageComponent implements OnInit {
  posages: Posage[] = [];
  // ID de ligne de checklist spécifié statiquement pour cet exemple
 // private ligneChecklistId: number = 1;
 @Input() ligneChecklistId: number;


  constructor(private posageService: PosageService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    if (this.ligneChecklistId) {
      this.getPosagesByLigneChecklistId();
    }
  }

  ngOnChanges(): void {
    if (this.ligneChecklistId) {
      this.getPosagesByLigneChecklistId();
    }
  }

   getPosagesByLigneChecklistId(): void {
    this.posageService.findByLigneChecklistDto(this.ligneChecklistId).subscribe(
      (data) => {
        this.posages = data;
      },
      (error) => {
        console.error('Error fetching posages', error);
      }
    );
  }

  onEdit(posage: Posage): void {
    // Implémentez la logique pour remplir le formulaire de modification avec les données de 'posage'
    // Peut-être en utilisant un service partagé ou le routage avec des paramètres d'état
  }
  
  onDelete(id: number): void {
    this.posageService.deletePosage(id).subscribe(
      () => {
        this.posages = this.posages.filter(p => p.idDto !== id);
      },
      (error) => {
        console.error('Error deleting posage', error);
      }
    );
  }

}
