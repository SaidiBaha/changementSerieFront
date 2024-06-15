import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Testeur } from 'src/shared/models/Testeur';
import { TesteurService } from 'src/shared/services/testeur.service';

@Component({
  selector: 'app-testeur',
  templateUrl: './testeur.component.html',
  styleUrls: ['./testeur.component.css']
})
export class TesteurComponent implements OnInit {
  @ViewChild("modalProduitContent", { static: true }) modalProduitContent!: TemplateRef<any>;
  @ViewChild("updateModalContent", { static: true }) updateModalContent!: TemplateRef<any>;
  testeurs: Testeur[] = [];
  idTesteur!: number;
  testeur:Testeur=new Testeur();
 testeurGroup:FormGroup;
  dialogRef: MatDialogRef<any>;
  constructor(private testeurService: TesteurService,private dialog: MatDialog) { 
    this.testeurGroup=new FormGroup({
      refTesteurDto:new FormControl('',Validators.required),
      nomTesteurDto:new FormControl('',Validators.required),
      ligneCMSorIntegDto:new FormControl('',Validators.required),
      atelierDto:new FormControl('',Validators.required),
      ufDto:new FormControl('',Validators.required)
    });
  

  }

  ngOnInit(): void {
    this.getTesteurs();
  }

  getTesteurs(): void {
    this.testeurService.getAllTesteurs().subscribe(
      (data) => {
        this.testeurs = data;
      },
      (error) => {
        console.error('Error fetching testeurs', error);
      }
    );
  }

  createTesteur(testeur: Testeur): void {
    this.testeurService.createTesteur(testeur).subscribe({
      next: (data) => {
        this.testeurs.push(data);
        // this.dialog.close();
      },
      error: (error) => {
        console.error('Error creating tester:', error);
      }
    });
  }




  deleteTesteur(id: number): void {
    this.testeurService.deleteTesteur(id).subscribe(
      () => {
        this.testeurs = this.testeurs.filter((testeur) => testeur.idDto !== id);
      },
      (error) => {
        console.error('Error deleting testeur', error);
      }
    );
  }
  openModal(): void {
    this.idTesteur = this.testeur.idDto;
    this.dialogRef = this.dialog.open(this.modalProduitContent); // Vous devez remplacer ceci par le contenu de votre modal
  }
  openUpdateModal(): void {
    this.idTesteur = this.testeur.idDto;
    this.dialogRef = this.dialog.open(this.updateModalContent); // Vous devez remplacer ceci par le contenu de votre modal
  }
  closeModal(): void {
    this.dialogRef.close();
  }
  updateTesteur(){
    this.testeurService.updateTesteur(this.idTesteur,this.testeur).subscribe(() => {
     
      console.log('msg:', this.idTesteur, this.testeur); // bech 
     // this.dialog.close();
      this.getTesteurs(); // Rechargez la liste après la mise à jour
    }

    );
  }

}