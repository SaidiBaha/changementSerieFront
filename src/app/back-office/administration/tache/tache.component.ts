import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Tache } from 'src/shared/models/Tache';
import { TacheService } from 'src/shared/services/tache.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit{
  @ViewChild("modalContent", { static: true }) modalContent!: TemplateRef<any>; // Assurez-vous d'ajouter TemplateRef
  taches: Tache[] = [];
  tache: Tache =new Tache();
  idTache: number;
  id:number;
  showDropdownMenu: boolean = false;
  nouveauStatut: string = '';
  dialogRef: MatDialogRef<any>;
  constructor(private tacheService: TacheService,private route:ActivatedRoute,private dialog: MatDialog,private router:Router) { }

  ngOnInit(): void {
    this.loadTaches();
    }
 loadTaches():void{
  const projetId = this.route.snapshot.params['projetId'];
     this.tacheService.getAllTachesByProjetId(projetId).subscribe(data => {
      this.taches=data;
       console.log('Projet ID:', projetId);
      // Autres actions à effectuer avec l'ID du projet...
    //  console.log(params);
    // });
  });
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

  // updateTacheStatus(id: number, tacheData: Tache): void {
  //   this.tacheService.updateTacheStatus(id, tacheData).subscribe(() => {
  //     console.log('Tache status updated successfully:', id, tacheData);
  //   });
  // }
  updateTacheStatus() {
  this.tacheService.updateTacheStatus(this.idTache,this.tache).subscribe((response)=>{
    // this.tacheService.getTacheById(this.id).subscribe(
    //   res=>{
    //     console.log("res",res);
    //    // this.taches=res
  
    //   }
    // )
    this.loadTaches();
    
  })
  
  }



  getId(id : number){
    this.idTache = id;
    this.tacheService.getTacheById(id).subscribe((data)=>{
      this.tache = data      
    })
  }
 /* UpdateAvailability(){
    this.availablityservice.updateAvailablit(this.idAvailablity , this.availablity ).subscribe((response)=>{
      this.availablityservice.getAvailablitById(this.id).subscribe(
        res=>{
          console.log("res",res);
          this.listAvailablity=res
    
        }
      )
    })
    this.route.navigate(['/list-availablity'])
  }*/


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
  getAllTachesByProjetId(projetId: number): void {
    this.tacheService.getAllTachesByProjetId(projetId).subscribe(
      (taches: Tache[]) => {
        this.taches = taches;
        console.log('Taches for projet', projetId, ':', this.taches);
      },
      (error: any) => {
        console.error('Error fetching taches for projet', projetId, ':', error);
      }
    );
  }
  openModal(): void {
    this.idTache = this.tache.idDto;
    this.dialogRef = this.dialog.open(this.modalContent); // Vous devez remplacer ceci par le contenu de votre modal
  }
  
  closeModal(): void {
    this.dialogRef.close();
  }
}



