

import { Injectable } from "@angular/core";
import { HttpRepositoryService } from "src/core/httpRepository.service";
import { Produit } from "../models/Produit";

@Injectable({
    providedIn: 'root'
  })
export class ProduitService {


  private BASE_URI = 'springMVC/api/v1/produit';

  constructor(private httpRepositoryService: HttpRepositoryService) { }

  

  createProduit(produit: Produit,checklistId:number) {
      return this.httpRepositoryService.post<Produit>(`${this.BASE_URI}/create/${checklistId}`, produit);
    }
  
getProduitById(id: number) {
  return this.httpRepositoryService.get<Produit>(`${this.BASE_URI}/${id}`);
}

getAllProduits() {
  return this.httpRepositoryService.get<Produit[]>(`${this.BASE_URI}/all`);
}

updateProduit(id: number, famille: Produit) {
  return this.httpRepositoryService.put<Produit>(`${this.BASE_URI}/${id}`, famille);
}

deleteProduit(id: number) {
  return this.httpRepositoryService.delete<void>(`${this.BASE_URI}/${id}`);
}

}

