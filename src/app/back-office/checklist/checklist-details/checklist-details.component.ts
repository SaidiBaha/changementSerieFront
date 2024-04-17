import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Checklist } from 'src/shared/models/Checklist';
import { LigneCheck } from 'src/shared/models/LigneCheck';
import { Posage } from 'src/shared/models/Posage';
import { LigneChecklistService } from 'src/shared/services/LigneCheck.service';
import { ChecklistService } from 'src/shared/services/checklist.service';
import { PosageService } from 'src/shared/services/posage.service';


@Component({
  selector: 'app-checklist-details',
  templateUrl: './checklist-details.component.html',
  styleUrls: ['./checklist-details.component.css']
})
export class ChecklistDetailsComponent implements OnInit {
  checklist: Checklist;
  ligneChecklists: LigneCheck[] = [];
  listPosage:Posage[]=[];

  constructor(
    private checklistService: ChecklistService,
    private posageService:PosageService,
    private ligneChecklistService: LigneChecklistService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // ngOnInit(): void {
  //   const checklistId = this.route.snapshot.params['id'];
  //   this.checklistService.getChecklistById(checklistId).subscribe(data => {
  //     this.checklist = data;
  //   });
  //   this.ligneChecklistService.findByChecklistId(checklistId).subscribe(data => {
  //     this.ligneChecklists = data;
  //   });
  // }

  ngOnInit(): void {
    const checklistId = this.route.snapshot.params['id'];
    this.checklistService.getChecklistById(checklistId).subscribe(data => {
        this.checklist = data;
    });
    this.ligneChecklistService.findByChecklistId(checklistId).subscribe(data => {
        this.ligneChecklists = data;
        // Pour chaque ligneChecklist, récupérez les posages associés
        this.ligneChecklists.forEach(ligneCheck => {
            this.ligneChecklistService.getPosagesByLigneChecklistId(ligneCheck.idDto).subscribe(posagesDto => {
                ligneCheck.posagesDto = posagesDto;
            });
        });
    });
}

addPosage(ligneChecklistId: number): void {
  // Naviguez vers le composant addPosage avec le ID de la ligneChecklist
  this.router.navigate(['/dashboard/checklist/addPosage', { ligneChecklistId: ligneChecklistId }]);

    
}

editPosage(posageId: number): void {
  // Naviguez vers le composant addPosage avec le ID du posage à modifier
  this.router.navigate(['/dashboard/checklist/addPosage', { id: posageId }]);
}

deletePosage(posageId: number,ligneCheckIndex: number): void {
  // Appelez la fonction de service pour supprimer le posage
  this.posageService.deletePosage(posageId).subscribe({
      next: () => {
       
          // Rechargez les posages ou mettez à jour la vue
          this.ligneChecklists[ligneCheckIndex].posagesDto = this.ligneChecklists[ligneCheckIndex].posagesDto.filter(p => p.idDto !== posageId);
          console.log('Posage supprimé');
      },
      error: (err) => {
          console.error('Erreur lors de la suppression du posage:', err);
      }
  });
}


}
