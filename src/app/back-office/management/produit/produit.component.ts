import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Produit } from 'src/shared/models/Produit';
import { ProduitService } from 'src/shared/services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  @ViewChild("modalProduitContent", { static: true }) modalProduitContent!: TemplateRef<any>;
  @ViewChild("updateModalContent", { static: true }) updateModalContent!: TemplateRef<any>;
  produits: Produit[] = [];
  produit:Produit=new Produit();
  idProduit!: number;
  produitGroup:FormGroup;
  dialogRef: MatDialogRef<any>;
  constructor(private produitservice: ProduitService, private dialog: MatDialog) {
    this.produitGroup=new FormGroup({
      nomProduitDto:new FormControl('',Validators.required),
      refProduitDto:new FormControl('',Validators.required)
    });
  

  }

  ngOnInit(): void {
    this.getAllProduits();
  }


  getAllProduits(): void {
    this.produitservice.getAllProduits().subscribe(data => {
      this.produits = data;
    });
  }
  createProduit(produit: Produit): void {
    this.produitservice.createProduit(produit).subscribe({
      next: (data) => {
        this.produits.push(data);
        // this.dialog.close();
      },
      error: (error) => {
        console.error('Error creating product:', error);
      }
    });
  }
  updateProduit(): void {
    this.produitservice.updateProduit(this.idProduit, this.produit).subscribe(() => {
      // this.dialog.close();
      this.getAllProduits();
    });
  }



  openModal(): void {
    this.idProduit = this.produit.idDto;
    this.dialogRef = this.dialog.open(this.modalProduitContent); // Vous devez remplacer ceci par le contenu de votre modal
  }
  openUpdateModal(): void {
    this.idProduit = this.produit.idDto;
    this.dialogRef = this.dialog.open(this.updateModalContent); // Vous devez remplacer ceci par le contenu de votre modal
  }
  deleteproduit(id: number): void {
    //add by manar 5ater mafamech delete produit
    this.produitservice.deleteProduit(id).subscribe(() => {
      this.produits = this.produits.filter(f => f.idDto !== id);
    });
  }
  closeModal(): void {
    this.dialogRef.close();
  }
}
