import { Injectable } from "@angular/core";
import { HttpRepositoryService } from "src/core/httpRepository.service";
import { LigneCheck } from "../models/LigneCheck";


@Injectable({
    providedIn: 'root'
})
export class LigneChecklistService {

    private BASE_URI = 'springMVC/api/v1/lignechecklist';

    constructor(private httpRepositoryService: HttpRepositoryService) { }

    createLigneChecklist(dto: LigneCheck, checklistID: number) {
        return this.httpRepositoryService.post<LigneCheck>(`${this.BASE_URI}/create/${checklistID}`, dto);
    }

    getLigneChecklistById(id: number) {
        return this.httpRepositoryService.get<LigneCheck>(`${this.BASE_URI}/${id}`);
    }

    getAllLigneChecklists() {
        return this.httpRepositoryService.get<LigneCheck[]>(`${this.BASE_URI}`);
    }

    updateLigneChecklist(id: number, dto: LigneCheck) {
        return this.httpRepositoryService.put<LigneCheck>(`${this.BASE_URI}/${id}`, dto);
    }
    findByChecklistId(checklistId: number) {
        return this.httpRepositoryService.get<LigneCheck[]>(`${this.BASE_URI}/by-checklist/${checklistId}`);
      }
      

    deleteLigneChecklist(id: number) {
        return this.httpRepositoryService.delete<void>(`${this.BASE_URI}/${id}`);
    }
}
