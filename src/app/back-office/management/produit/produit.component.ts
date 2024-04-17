import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/shared/models/Produit';
import { ProduitService } from 'src/shared/services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits: Produit[] = [];
  
  constructor(private produitservice: ProduitService) {}

  ngOnInit(): void {
    this.getAllProduits();
  }


  getAllProduits(): void {
    this.produitservice.getAllProduits().subscribe(data => {
      this.produits = data;
    });
  }
  deleteproduit(id: number): void {
    //add by manar 5ater mafamech delete produit
    this.produitservice.deleteProduit(id).subscribe(() => {
      this.produits = this.produits.filter(f => f.idDto !== id);
    });
  }
}
