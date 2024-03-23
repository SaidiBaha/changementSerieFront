import { Injectable } from "@angular/core";
import { HttpRepositoryService } from "src/core/httpRepository.service";
import { Famille } from "../models/Famille";
import { Demande } from "../models/Demande";

@Injectable({
    providedIn: 'root'
  })
export class FamilleService {

    private BASE_URI = 'springMVC/api/v1/fammiles';

    constructor(private httpRepositoryService: HttpRepositoryService) { }

    
  
    createFamille(famille: Famille) {
        return this.httpRepositoryService.post<Famille>(`${this.BASE_URI}/create`, famille);
      }
    
  getFamilleById(id: number) {
    return this.httpRepositoryService.get<Famille>(`${this.BASE_URI}/${id}`);
  }

  getAllFamilles() {
    return this.httpRepositoryService.get<Famille[]>(`${this.BASE_URI}/all`);
  }

  updateFamilles(id: number, famille: Famille) {
    return this.httpRepositoryService.put<Famille>(`${this.BASE_URI}/${id}`, famille);
  }

  deleteProjet(id: number) {
    return this.httpRepositoryService.delete<void>(`${this.BASE_URI}/${id}`);
  }

}