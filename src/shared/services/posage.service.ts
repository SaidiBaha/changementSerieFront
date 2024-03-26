import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpRepositoryService } from "src/core/httpRepository.service";
import { Posage } from "../models/Posage";


@Injectable({
    providedIn: 'root'
  })
export class PosageService{


    private BASE_URI = 'springMVC/api/v1/posage';

    constructor(private httpRepositoryService: HttpRepositoryService) { }

    createPosage(posage: Posage, ligneId: number) {
        return this.httpRepositoryService.post<Posage>(`${this.BASE_URI}/create/${ligneId}`, posage);
    }

    getPosageById(id: number) {
        return this.httpRepositoryService.get<Posage>(`${this.BASE_URI}/${id}`);
    }

    getAllPosages() {
        return this.httpRepositoryService.get<Posage[]>(`${this.BASE_URI}`);
    }

    updatePosage(id: number, posage: Posage) {
        return this.httpRepositoryService.put<Posage>(`${this.BASE_URI}/${id}`, posage);
    }

    deletePosage(id: number) {
        return this.httpRepositoryService.delete<void>(`${this.BASE_URI}/${id}`);
    }

    findByLigneChecklistDto(ligneChecklistDtoId: number) {
        return this.httpRepositoryService.get<Posage[]>(`${this.BASE_URI}/byLigneChecklist/${ligneChecklistDtoId}`);
    }

}