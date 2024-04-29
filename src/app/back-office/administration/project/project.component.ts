import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Projet } from 'src/shared/models/Projet';
import { ProjetService } from 'src/shared/services/projet.service';
import { ModalComponent } from '../modal/modal.component';
import { AuthentificationService } from 'src/shared/services/authentification.service';
import { TacheService } from 'src/shared/services/tache.service';
import { Tache } from 'src/shared/models/Tache';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})



export class ProjectComponent implements OnInit{

  
  @ViewChild("dialog",{static:false} )dialog!:ModalComponent; 
 
  projets: Projet[] = [];
  selectedProjet?: Projet;
  isEditMode = false;
  projet:Projet = new Projet();
  idProjet :number;
  taches: Tache[] = [];
 tache:Tache=new Tache();
 

  constructor(private projetservice:ProjetService,private authService: AuthentificationService ,private router:Router,private tacheService:TacheService){}


  ngOnInit(): void {
  
    this.getAllProjets();
  }

  getAllProjets(): void {
    this.projetservice.getAllProjets().subscribe(
      (data: Projet[]) => {
        this.projets = data;
      
      },
      (error: any) => {
        console.error('Error fetching projets', error);
      }
    );
  }

  getById(id :never){
    this.projetservice.getProjetById(id).subscribe((project: any) => {
      console.log("userTESTTT", project);
    // Ouvre le modal en mode édition avec les données de l'utilisateur
    });
  }

  createProjet(projetData: Projet): void {
    const userId = this.authService.getCurrentUserId(); // Récupérez l'ID de l'utilisateur
    console.log(userId);

    if (userId) {
      const numericUserId = Number(userId); // Convertissez l'ID utilisateur en nombre
      if (!isNaN(numericUserId)) {
        this.projetservice.createProjet(projetData, numericUserId).subscribe(data => {
          this.projets.push(data);
          this.dialog.close();
        }, error => {
          console.error('Error creating projet', error);
        });
      } else {
        console.error('User ID is not a number:', userId);
      }
    } else {
      console.error('User ID is not available');
    }
  }

  deleteProjet(id: number): void {
    this.projetservice.deleteProjet(id).subscribe(() => {
      this.projets = this.projets.filter(p => p.idDto !== id);
    });
  }


 /* updateProjet(projetData: Projet): void {
    console.log("test")
    if (this.selectedProjet && this.selectedProjet.idDto) {
      this.projetservice.updateProjet(this.selectedProjet.idDto, projetData).subscribe(data => {
        const index = this.projets.findIndex(p => p.idDto === data.idDto);
        if (index !== -1) {
          this.projets[index] = data;
        }
      });
    }
  }*/
  updateProjet(){
    this.projetservice.updateProjet(this.idProjet,this.projet).subscribe(() => {
     
      console.log('msg:', this.idProjet, this.projet); // bech 
      this.dialog.close();
      this.getAllProjets(); // Rechargez la liste après la mise à jour
    }

    );
  }
    
    



  openModal(projet?: Projet) {
    if (projet) {
      // Si un utilisateur est passé en argument, remplissez le formulaire pour la mise à jour
      this.projet = { ...projet };
      this.isEditMode = true;
      this.idProjet = projet.idDto; // Assurez-vous que l'ID est conservé pour la mise à jour
    } else {
      // Sinon, réinitialisez le formulaire pour ajouter un nouvel utilisateur
      this.projet = new Projet();
      this.isEditMode = false;
      this.idProjet = undefined;
    }
    this.dialog?.open();
  }
  
  submitProjet() {
    if (this.isEditMode) {
      this.updateProjet();
    } else {
      this.createProjet(this.projet);
    }
  }
//            ------------------Oumaima--------------------

navigateToTache(idProjet: number): void {
  this.router.navigate(['/dashboard/administration/tache', idProjet]);
}


}
