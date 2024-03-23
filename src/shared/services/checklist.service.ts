import { Injectable } from "@angular/core";
import { HttpRepositoryService } from "src/core/httpRepository.service";
import { Checklist } from "../models/Checklist";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
  })
export class ChecklistService {

    private BASE_URI = 'springMVC/api/v1/checklist';
    constructor(private httpRepositoryService: HttpRepositoryService,private http: HttpClient) { }


    createCehcklist(checklist: Checklist, familleId: number, testeurId: number) {
        return this.httpRepositoryService.post<Checklist>(`${this.BASE_URI}/create/${familleId}/${testeurId}`, checklist);
      }

      getChecklistById(id: number) {
        return this.httpRepositoryService.get<Checklist>(`${this.BASE_URI}/${id}`);
      }
    
      getAllChecklists() {
        return this.httpRepositoryService.get<Checklist[]>(`${this.BASE_URI}/all`);
      }
    
      updateChecklist(id: number, checklist: Checklist) {
        return this.httpRepositoryService.put<Checklist>(`${this.BASE_URI}/${id}`, checklist);
      }
    
      deleteChecklist(id: number) {
        return this.httpRepositoryService.delete<void>(`${this.BASE_URI}/${id}`);
      }

      // Filtres de checklist
  getChecklistsByFamille(nomFamille: string): Observable<Checklist[]> {
    return this.http.get<Checklist[]>(`${this.BASE_URI}/byFamille?nomFamille=${nomFamille}`);
  }

  getChecklistsByTesteur(nomTesteur: string): Observable<Checklist[]> {
    return this.http.get<Checklist[]>(`${this.BASE_URI}/byTesteur?nomTesteur=${nomTesteur}`);
  }

  getChecklistsByProduit(nomProduit: string): Observable<Checklist[]> {
    return this.http.get<Checklist[]>(`${this.BASE_URI}/byProduit?nomProduit=${nomProduit}`);
  }

  getChecklistsByFamilleAndProduit(nomFamille: string, nomProduit: string): Observable<Checklist[]> {
    return this.http.get<Checklist[]>(`${this.BASE_URI}/byFamilleAndProduit?nomFamille=${nomFamille}&nomProduit=${nomProduit}`);
  }



}