import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Tache } from 'src/shared/models/Tache';
import { TacheService } from 'src/shared/services/tache.service';
import { ModalComponent } from '../modal/modal.component';
import { User } from 'src/shared/models/User';
import { UserService } from 'src/shared/services/user.service';


@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit{
 @ViewChild("modalContent", { static: true }) modalContent!: TemplateRef<any>; // Assurez-vous d'ajouter TemplateRef
 @ViewChild("modalOPtion", { static: true }) modalOPtion!: TemplateRef<any>; 
 @ViewChild("affecteuser", { static: true }) affecteuser!: TemplateRef<any>; 
 @ViewChild("addtache", { static: true }) addtache!: TemplateRef<any>; 
 @ViewChild("description", { static: true }) description!: TemplateRef<any>; 
users:User[]=[];
 taches: Tache[] = [];
  tache: Tache =new Tache();
  idTache: number;
  id:number;
  showDropdownMenu: boolean = false;
  nouveauStatut: string = '';
  dialogRef: MatDialogRef<any>;
  showAddCardInput: boolean = false;
userId: number;

  constructor(private tacheService: TacheService,private userService:UserService,private route:ActivatedRoute,private dialog: MatDialog,private router:Router) { }

  ngOnInit(): void {
    this.loadTaches();
    this.getUsers();
    }
    getUsers(){
      this.userService.getUsers().subscribe(
  
        res=>{
          console.log("res",res);
          this.users=res
        }
      )
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

  createTache(tacheData: Tache): void {
    const projetId = this.route.snapshot.params['projetId'];
    console.log("test");
    console.log(projetId);
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
    console.log("test")
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
  selectedUserId: string; // Définissez le type de votre ID utilisateur ici
  onUserSelected() {
    console.log(this.selectedUserId); // Affiche l'ID de l'utilisateur sélectionné dans la console
    // Vous pouvez faire d'autres traitements avec this.selectedUserId ici
  }
  
  assignerTache(): void {
    if (this.idTache && this.selectedUserId) {
      const tacheId = this.idTache;
      const userId = Number(this.selectedUserId); // Assurez-vous que userId est un nombre

      this.assignerTacheAUtilisateur(tacheId, userId);
    } else {
      console.error('Tache ID or User ID not selected.');
    }
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
  toggleAddCardInput() {
    this.showAddCardInput = !this.showAddCardInput;
  }
  openModaloptions(): void {
    this.idTache = this.tache.idDto;
    this.dialogRef = this.dialog.open(this.modalOPtion); // Vous devez remplacer ceci par le contenu de votre modal
  }
  openModalUser(): void {
    this.idTache = this.tache.idDto;
    this.dialogRef = this.dialog.open(this.affecteuser); // Vous devez remplacer ceci par le contenu de votre modal
  }
  openModaladdtache(): void {
    this.idTache = this.tache.idDto;
    this.dialogRef = this.dialog.open(this.addtache); // Vous devez remplacer ceci par le contenu de votre modal
  }
  openModaldescription(): void {
    this.idTache = this.tache.idDto;
    this.dialogRef = this.dialog.open(this.description); // Vous devez remplacer ceci par le contenu de votre modal
  }
  
}