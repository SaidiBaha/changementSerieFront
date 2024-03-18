import { Component, OnInit, ViewChild } from '@angular/core';
import { Demande } from 'src/shared/models/Demande';


import { DemmandeService } from 'src/shared/services/demmande.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-demandechangement',
  templateUrl: './demandechangement.component.html',
  styleUrls: ['./demandechangement.component.css']
})
export class DemandechangementComponent implements OnInit{
  demandes: Demande[] = [];
  selectedDemande?: Demande;
  isEditMode = false; // Ajoutez cette propriété pour suivre le mode de la modal
  idDemmande! : number; 
  demande: Demande = new Demande();

  @ViewChild("dialog",{static:false} )dialog!:ModalComponent; //hedhi l modal gernerique

  constructor(private demandeChangementService: DemmandeService) {}

  ngOnInit(): void {
    this.getAllDemandes();
  }
  getAllDemandes(): void {
    this.demandeChangementService.getAllDemandes().subscribe(data => {
      this.demandes = data;
      console.log(data)
    });
  }
  createDemande(demandeData: Demande): void {
    
    this.demandeChangementService.createDemande(demandeData).subscribe({
      
      next: (data) => {
        this.demandes.push(data);
        console.log(demandeData)
        this.dialog.close();
      },
      error: (error) => {
        console.error('Error creating demande:', error);
        console.error('Error details:', error.error);
        console.log(demandeData);
        // Vous pouvez afficher un message d'erreur à l'utilisateur ici
      }
    });
  }

 /* updateDemande(demandeData: Demande): void {   // cette méthode faire create n'est pas update
    if (this.selectedDemande && this.selectedDemande.idDto) {
      this.demandeChangementService.updateDemande(this.selectedDemande.idDto, demandeData).subscribe(data => {
        const index = this.demandes.findIndex(d => d.idDto === data.idDto);
        if (index !== -1) {
          this.demandes[index] = data;
        }
        this.dialog.close(); // Fermez le modal après la mise à jour
        this.getAllDemandes(); // Rechargez la liste après la mise à jour
      });
    }
  }*/
/*  updateuser(){
    this.userService.updateUser(this.idUser, this.user).subscribe(() => {
      this.dialog.close();
      this.getUsers(); // Rechargez la liste après la mise à jour
    });
  }*/
  updateDemande(){
    this.demandeChangementService.updateDemande(this.idDemmande,this.demande).subscribe(()=>{
      this.dialog.close();
      this.getAllDemandes();
    }

    )
  }



  deleteDemande(id: number): void {
    this.demandeChangementService.deleteDemande(id).subscribe(() => {
      this.demandes = this.demandes.filter(d => d.idDto !== id);
    });
  }

 /* openModal(demande?: Demande) {
    // ...
    this.dialog?.open();
    this.dialog?.closed.subscribe(() => {
      this.selectedDemande = undefined; // Réinitialisez après la fermeture du modal
    });
  }*/
  openModal(demmande?: Demande) {
    if (demmande) {
      // Si un utilisateur est passé en argument, remplissez le formulaire pour la mise à jour
      this.demande = { ... demmande};
      this.isEditMode = true;
      this.idDemmande = demmande.idDto; // Assurez-vous que l'ID est conservé pour la mise à jour
    } else {
      // Sinon, réinitialisez le formulaire pour ajouter un nouvel utilisateur
      this.demande = new Demande();
      this.isEditMode = false;
      this.idDemmande = undefined;
    }
    this.dialog?.open();
  }
  

  submitDemande() {
    if (this.isEditMode) {
      this.updateDemande();
    } else {
      this.createDemande(this.demande);
    }
  }

}
