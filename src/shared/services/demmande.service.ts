import { Injectable } from "@angular/core";
import { HttpRepositoryService } from "src/core/httpRepository.service";
import { Demande } from "../models/Demande";


@Injectable({
    providedIn: 'root'
  })
export class DemmandeService{

    private BASE_URI = 'springMVC/api/v1/demandes';

    constructor(private httpRepositoryService: HttpRepositoryService) { }

  createDemande(demande: Demande) {
    return this.httpRepositoryService.post<Demande>(`${this.BASE_URI}/create`, demande);
  }

  getDemandeById(id: number) {
    return this.httpRepositoryService.get<Demande>(`${this.BASE_URI}/${id}`);
  }

  getAllDemandes() {
    return this.httpRepositoryService.get<Demande[]>(`${this.BASE_URI}/all`);
  }

  updateDemande(id: number, demande: Demande) {
    return this.httpRepositoryService.put<Demande>(`${this.BASE_URI}/${id}`, demande);
  }

  deleteDemande(id: number) {
    return this.httpRepositoryService.delete<void>(`${this.BASE_URI}/${id}`);
  }

}