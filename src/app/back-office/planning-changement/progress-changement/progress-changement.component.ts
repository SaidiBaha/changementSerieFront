import { Component, Input, OnInit } from '@angular/core';
import { EtatChangement } from 'src/shared/models/PlanningChangementSerie ';
import { PlanningChangementSerieService } from 'src/shared/services/PlanningChangement.service';

@Component({
  selector: 'app-progress-changement',
  templateUrl: './progress-changement.component.html',
  styleUrls: ['./progress-changement.component.css']
})
export class ProgressChangementComponent implements OnInit{
  @Input() planningId!: number;
  etatChangement!: EtatChangement;
  progressWidth: number = 0;
  // cette ligne pour rendre l'énumération accessible dans le template
  public EtatChangement = EtatChangement;


  constructor(private planningservice: PlanningChangementSerieService) {}

  ngOnInit(): void {
    this.planningservice.getEtatChangement(this.planningId).subscribe(
      (etat: EtatChangement) => {
        this.etatChangement = etat;
        console.log(etat)
        console.log(this.etatChangement)
        this.updateProgressWidth();
       
        
      },
      (error) => {
        console.error('Erreur lors de la récupération de l\'état de changement', error);
      }
    );
  }

  updateProgressWidth(): void {
    console.log("test1");
    switch (this.etatChangement) {
      case EtatChangement.PREPARATION:
        this.progressWidth = 14;
        console.log("test2");
        console.log(this.progressWidth); // Ajout du log ici
        console.log(this.etatChangement);
        break;
      case EtatChangement.VERIFICATION:
        this.progressWidth =50;
        console.log("test3");
        console.log(this.progressWidth); // Ajout du log ici
        console.log(this.etatChangement);
        break;
      case EtatChangement.CHANGEMENTEFFECTUE:
        this.progressWidth = 100;
        console.log("test4");
        console.log(this.progressWidth); // Ajout du log ici
        console.log(this.etatChangement);
        break;
    }
  }
  

}
