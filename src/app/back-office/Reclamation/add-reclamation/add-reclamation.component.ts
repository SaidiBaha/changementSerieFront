import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'src/shared/models/Reclamation';
import { ReclamationService } from 'src/shared/services/Reclamation.service';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent implements OnInit{
constructor(private reclamationService: ReclamationService){}
reclamations: Reclamation[]=[];
reclamation:Reclamation=new Reclamation();

  ngOnInit(): void {
    
  }
  saveReclamation(reclamation: Reclamation) {
    this.reclamationService.saveReclamation(reclamation, reclamation.userDto).subscribe(
      (data: Reclamation) => {
        console.log('Reclamation saved successfully:', data);
        // Ajoutez ici la logique pour gérer la réponse de sauvegarde si nécessaire
      },
      error => {
        console.error('Error saving reclamation:', error);
        // Ajoutez ici la logique pour gérer les erreurs de sauvegarde si nécessaire
      }
    );
  }
}
