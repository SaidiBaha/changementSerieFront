import { Injectable } from "@angular/core";
import { HttpRepositoryService } from "src/core/httpRepository.service";
import { Checklist } from "../models/Checklist";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ChecklistCompletee } from "../models/ChecklistCompletee";
import { ValidationsInput } from "../models/ValidationsInput";
import { ChecklistVide } from "../models/ChecklistVide";
import { ChecklistCompleteeIds } from "../models/ChecklistCompleteeIds";



@Injectable({
    providedIn: 'root'
  })
export class ChecklistService {

    private BASE_URI = 'springMVC/api/v1/checklist';
    private baseUrl ='http://localhost:8088/springMVC/api/v1/checklist';
   

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

// fonctions de remplire checklist et list des checklist remlie et complete 

getAllChecklistCompleteeByUserId(userId: number): Observable<ChecklistCompletee[]> {
  return this.http.get<ChecklistCompletee[]>(`${this.baseUrl}/complete/user/${userId}`);
}
// fonctions de remplire checklist et list des checklist remlie et complete 

getAllChecklistCompleteeByPlanningId(PlanningId: number): Observable<ChecklistCompletee[]> {
  return this.http.get<ChecklistCompletee[]>(`${this.baseUrl}/complete/planning/${PlanningId}`);
}
/*
getAllChecklistCompleteeByUserId(userId: number) {
  return this.httpRepositoryService.get<ChecklistCompletee>(`${this.BASE_URI}/complete/user/${userId}`);
}*/

updateChecklistcomplete(checklistCompleteId: number, validationsInput: ValidationsInput[]): Observable<any> {
  return this.http.post<any>(`${this.baseUrl}/update/${checklistCompleteId}`, { validationsInput });
}


//fonction pour romplir checklist
completeChecklistForPlanning(userId: number, planningId: number, data: any): Observable<any> {
  return this.http.post<any>(`${this.baseUrl}/complete/${userId}/${planningId}`, data);
}

getChecklistDetailsForUser(userId: number, checklistId: number): Observable<ChecklistVide> {
  return this.http.get<ChecklistVide>(`${this.baseUrl}/users/${userId}/checklists/${checklistId}`);
}

getChecklistcompleteForValidation2(checklistCompleteId: number): Observable<ChecklistVide> {
  return this.http.get<ChecklistVide>(`${this.baseUrl}/checklistCompletee/${checklistCompleteId}`);
  
}

getChecklistCompleteeIds(checklistCompleteeId: number): Observable<ChecklistCompleteeIds> {
 
 return this.http.get<ChecklistCompleteeIds>(`${this.baseUrl}/ids/${checklistCompleteeId}`);

}

getChecklistCompleteDetails(checklistCompleteId: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/checklistCompleteDetails/${checklistCompleteId}`);
}


}