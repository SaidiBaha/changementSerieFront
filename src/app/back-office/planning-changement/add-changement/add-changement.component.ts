import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Famille } from 'src/shared/models/Famille';
import { PlanningChangementSerie } from 'src/shared/models/PlanningChangementSerie ';
import { Produit } from 'src/shared/models/Produit';
import { PlanningChangementSerieService } from 'src/shared/services/PlanningChangement.service';
import { FamilleService } from 'src/shared/services/famille.service';
import { ProduitService } from 'src/shared/services/produit.service';

@Component({
  selector: 'app-add-changement',
  templateUrl: './add-changement.component.html',
  styleUrls: ['./add-changement.component.css']
})
export class AddChangementComponent implements OnInit {

  planningForm: FormGroup;
  familles: Famille[] = [];
  produits: Produit[] = [];
  selectedFamille: string = '';
  selectedProduit: string = '';
  isLoading: boolean = false; // Variable pour suivre l'état du chargement

  constructor(
    private planningService: PlanningChangementSerieService,
    private familleService: FamilleService,
    private router: Router,
    private produitService: ProduitService,
    private toastr: ToastrService 
  ) {
    this.planningForm = new FormGroup({
      titreDto: new FormControl('', Validators.required),
      debutDto: new FormControl('', Validators.required),
      finDto: new FormControl('', Validators.required),
      descriptionDto: new FormControl('', Validators.required),
      nomFamille: new FormControl('', Validators.required)
    
    });
  }

  ngOnInit(): void {
    this.loadFamilles();
  
  }

  loadFamilles() {
    this.familleService.getAllFamilles().subscribe(familles => {
      this.familles = familles;
    });
  }

 


  // fonction hedhi matraja3li chy ki ybda famech model de checklist
 /* onSubmit() {
    if (this.planningForm.valid) {
      const planning: PlanningChangementSerie = this.planningForm.value;
      this.planningService.createPlanningWithFilteredChecklists(planning, this.selectedFamille, this.selectedProduit).subscribe(() => {
        alert('Planning created successfully!');
        this.planningForm.reset();
      });
    }
  }*/

    onSubmit() {
      if (this.planningForm.valid) {
        const planning: PlanningChangementSerie = this.planningForm.value;
        this.isLoading = true; // Activer le chargement
        this.planningService.createPlanningWithFilteredChecklists(planning, this.selectedFamille).subscribe(() => {
          this.toastr.success('Planning created successfully!', 'Success');
          this.planningForm.reset();
          this.router.navigateByUrl('/dashboard/planning-changement/planning');
          this.isLoading = false; // Désactiver le chargement
        }, error => {
          this.toastr.error('Error occurred while creating planning', 'Error');
          this.isLoading = false; // Désactiver le chargement en cas d'erreur
        });
      } else {
        this.toastr.error('Veuillez remplir tous les champs avant de soumettre le formulaire.', 'Erreur');
      }
    }


}
