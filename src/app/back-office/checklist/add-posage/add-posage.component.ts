import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Posage } from 'src/shared/models/Posage';
import { PosageService } from 'src/shared/services/posage.service';

@Component({
  selector: 'app-add-posage',
  templateUrl: './add-posage.component.html',
  styleUrls: ['./add-posage.component.css']
})
export class AddPosageComponent {
  // posage: Posage = new Posage(); // Crée une nouvelle instance ou récupère les données pour la modification
  // editMode: boolean = false;

  // constructor(private posageService: PosageService) { }

  // savePosage(): void {
  //   if (this.editMode) {
  //     this.posageService.updatePosage(this.posage.idDto, this.posage).subscribe(
  //       (response) => {
  //         console.log('Posage updated', response);
  //       },
  //       (error) => {
  //         console.error('Error updating posage', error);
  //       }
  //     );
  //   } else {
  //     this.posageService.createPosage(this.posage, this.posage.ligneChecklistDto).subscribe(
  //       (response) => {
  //         console.log('Posage created', response);
  //       },
  //       (error) => {
  //         console.error('Error creating posage', error);
  //       }
  //     );
  //   }
  // }

  // setEditMode(posage: Posage): void {
  //   this.editMode = true;
  //   this.posage = { ...posage }; // Cloner l'objet pour éviter la manipulation directe
  // }

  posage: Posage = new Posage();
  ligneChecklistId: number;
  checklistId: number;


  constructor(
    private posageService: PosageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  // ngOnInit(): void {
  //   // Récupération de l'ID de la ligneChecklist si disponible
  //   this.route.params.subscribe(params => {
  //     if (params['ligneChecklistId']) {
  //       this.ligneChecklistId = params['ligneChecklistId'];
  //       this.checklistId = +params['checklistId'];
  //       // Initialisez un nouveau posage ici si nécessaire
  //     }

  //     if (params['id']) {
  //       this.loadPosage(params['id']);
  //     }
  //   });
  // }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ligneChecklistId = +params['ligneChecklistId']; // Assuming this is still needed
      this.checklistId = +params['checklistId'];
  
      if (params['id']) {
        this.loadPosage(params['id']);
      }
    });
  }

  // Chargement des données posage pour la modification
  loadPosage(id: number): void {
    this.posageService.getPosageById(id).subscribe({
      next: (data) => {
        this.posage = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement du posage:', err);
      }
    });
  }

  // savePosage(): void {
  //   if (this.posage.idDto) {
  //     // Si un id existe, mettez à jour le posage
  //     this.posageService.updatePosage(this.posage.idDto, this.posage).subscribe({
  //       next: () => {
  //         console.log('Posage mis à jour avec succès');
  //         this.router.navigate(['/dashboard/checklist/checklistDetails']);
  //       },
  //       error: (err) => {
  //         console.error('Erreur lors de la mise à jour du posage:', err);
  //       }
  //     });
  //   } else {
  //     // Sinon, créez un nouveau posage
  //     this.posageService.createPosage(this.posage, this.ligneChecklistId).subscribe({
  //       next: () => {
  //         console.log('Posage créé avec succès');
  //         this.router.navigate(['/dashboard/checklist/checklistDetails']);
  //       },
  //       error: (err) => {
  //         console.error('Erreur lors de la création du posage:', err);
  //       }
  //     });
  //   }
  // }

  // // Vous pouvez inclure une fonction d'annulation si nécessaire
  // cancel(): void {
  //   this.router.navigate(['/dashboard/checklist/checklistDetails', this.checklistId]);
  // }

  savePosage(): void {
    if (this.posage.idDto) {
      // If an id exists, update the posage
      this.posageService.updatePosage(this.posage.idDto, this.posage).subscribe({
        next: () => {
          console.log('Posage updated successfully');
          this.router.navigate(['/dashboard/checklist/checklistDetails', this.checklistId]);
        },
        error: (err) => {
          console.error('Error updating posage:', err);
        }
      });
    } else {
      // Otherwise, create a new posage
      this.posageService.createPosage(this.posage, this.ligneChecklistId).subscribe({
        next: () => {
          console.log('Posage created successfully');
          this.router.navigate(['/dashboard/checklist/checklistDetails', this.checklistId]);
        },
        error: (err) => {
          console.error('Error creating posage:', err);
        }
      });
    }
  }
  
  cancel(): void {
    this.router.navigate(['/dashboard/checklist/checklistDetails', this.checklistId]);
    console.log('checklistId')
  }

}


