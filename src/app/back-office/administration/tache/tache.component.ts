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
  tache: Tache;
  idTache: number;
  constructor(private tacheService: TacheService) { }
  ngOnInit(): void {
    this.getAllTaches();
  }
 
  getAllTaches(): void {
    this.tacheService.getAllTaches().subscribe(
      (data: Tache[]) => {
        this.taches = data;
      },
      (error: any) => {
        console.error('Error fetching taches', error);
      }
    );
  }

  getTacheById(id: number): void {
    this.tacheService.getTacheById(id).subscribe((tache: any) => {
      console.log("Tache:", tache);
      // Ouvre le modal en mode édition avec les données de la tache
      this.tache = tache;
    });
  }

  createTache(tacheData: Tache, projetId: number): void {
    this.tacheService.saveTache(tacheData, projetId).subscribe(data => {
      this.taches.push(data);
    }, error => {
      console.error('Error creating tache', error);
    });
  }

  deleteTache(id: number): void {
    this.tacheService.deleteTache(id).subscribe(() => {
      console.log('Tache deleted successfully:', id);
    });
  }

  updateTache(id: number, tacheData: Tache): void {
    this.tacheService.updateTache(id, tacheData).subscribe(() => {
      console.log('Tache updated successfully:', id, tacheData);
    });
  }

  updateTacheStatus(id: number, tacheData: Tache): void {
    this.tacheService.updateTacheStatus(id, tacheData).subscribe(() => {
      console.log('Tache status updated successfully:', id, tacheData);
    });
  }

  assignerTacheAUtilisateur(tacheId: number, userId: number): void {
    this.tacheService.assignerTacheAUtilisateur(tacheId, userId).subscribe(() => {
      console.log('Tache assigned to user successfully:', tacheId, userId);
    });
  }

  getAllTachesToDoByProjetId(projetId: number): void {
    this.tacheService.getAllTachesToDoByProjetId(projetId).subscribe((taches: Tache[]) => {
      console.log('Taches with status TO_DO for projet', projetId, ':', taches);
    });
  }

  getAllTachesDoingByProjetId(projetId: number): void {
    this.tacheService.getAllTachesDoingByProjetId(projetId).subscribe((taches: Tache[]) => {
      console.log('Taches with status DOGIN for projet', projetId, ':', taches);
    });
  }

  getAllTachesDONEByProjetId(projetId: number): void {
    this.tacheService.getAllTachesDONEByProjetId(projetId).subscribe((taches: Tache[]) => {
      console.log('Taches with status DONE for projet', projetId, ':', taches);
    });
  }
}



