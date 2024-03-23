import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Checklist, TypeValidation, TypeZone } from 'src/shared/models/Checklist';
import { Famille } from 'src/shared/models/Famille';
import { Testeur } from 'src/shared/models/Testeur';
import { ChecklistService } from 'src/shared/services/checklist.service';
import { FamilleService } from 'src/shared/services/famille.service';
import { TesteurService } from 'src/shared/services/testeur.service';

@Component({
  selector: 'app-add-checklist',
  templateUrl: './add-checklist.component.html',
  styleUrls: ['./add-checklist.component.css']
})
export class AddChecklistComponent implements OnInit{

  checklist: Checklist = new Checklist();
  familles: Famille[] = [];
  testeurs: Testeur[] = [];

  // Ajout des enums si nécessaire
  typeValidations = Object.values(TypeValidation);
  typeZones = Object.values(TypeZone);



  constructor(
    private checklistService: ChecklistService,
    private familleService: FamilleService,
    private testeurService: TesteurService,
     private router: Router,
     private route: ActivatedRoute,
     ) {}


     ngOnInit(): void {
      this.loadFamilles();
      this.loadTesteurs();
      const id = this.route.snapshot.params['id'];
      if (id) {
        this.loadChecklist(id);
      }
    }
  
    loadFamilles(): void {
      this.familleService.getAllFamilles().subscribe({
        next: (data) => {
          this.familles = data;
        },
        error: (err) => console.error('Error loading familles:', err),
      });
    }
  
    loadTesteurs(): void {
      this.testeurService.getAllTesteurs().subscribe({
        next: (data) => {
          this.testeurs = data;
        },
        error: (err) => console.error('Error loading testeurs:', err),
      });
    }
  
    loadChecklist(id: number): void {
      this.checklistService.getChecklistById(id).subscribe({
        next: (data) => {
          this.checklist = data;
        },
        error: (err) => {
          console.error('Error fetching checklist:', err);
        }
      });
    }
  
    createChecklist(): void {
      this.checklistService.createCehcklist(this.checklist, this.checklist.familleDto, this.checklist.testeurDto).subscribe({
        next: () => {
        
          this.router.navigate(['/dashboard/checklist/listcheck']);
        },
        error: (err) => {
          console.error('Error creating checklist:', err);
        }
      });
    }
  
    updateChecklist(): void {
      this.checklistService.updateChecklist(this.checklist.idDto, this.checklist).subscribe({
        next: () => {
          this.router.navigate(['/dashboard/checklist/listcheck']);
        },
        error: (err) => {
          console.error('Error updating checklist:', err);
        }
      });
    }
  
    save(): void {
      if (this.checklist.idDto) {
        this.updateChecklist();
      } else {
        this.createChecklist();
      }
    }
  
    cancel(): void {
      this.router.navigate(['/dashboard/checklist']);
    }

}
