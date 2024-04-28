import { Injectable } from "@angular/core";
import { HttpRepositoryService } from "src/core/httpRepository.service";
import { Projet } from "../models/Projet";



@Injectable({
    providedIn: 'root'
  })
  export class ProjetService  {


    private BASE_URI = 'springMVC/api/v1/projet';
    

  constructor(private httpRepositoryService: HttpRepositoryService) { }

  createProjet(projet: Projet, userId: any) {
    return this.httpRepositoryService.post<Projet>(`${this.BASE_URI}/create/${userId}`, projet);
  }

  getProjetById(id: number) {
    return this.httpRepositoryService.get<Projet>(`${this.BASE_URI}/${id}`);
  }
  

  getAllProjets() {
    return this.httpRepositoryService.get<Projet[]>(`${this.BASE_URI}/all`);
  }

  updateProjet(id: number, projet: Projet) {
    return this.httpRepositoryService.put<Projet>(`${this.BASE_URI}/${id}`, projet);
  }

  deleteProjet(id: number) {
    return this.httpRepositoryService.delete<void>(`${this.BASE_URI}/${id}`);
  }
  }       