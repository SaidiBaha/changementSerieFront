import { Injectable } from '@angular/core';
import { HttpRepositoryService } from 'src/core/httpRepository.service';
import { Tache } from '../models/Tache';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  private baseUrl = 'springMVC/api/v1/tache';

  constructor(private httpRepositoryService: HttpRepositoryService) { }
  saveTache(tache: Tache, projetId: number): Observable<Tache> {
    return this.httpRepositoryService.post<Tache>(`${this.baseUrl}/save/${projetId}`, tache);
  }

  getTacheById(id: number) {
    return this.httpRepositoryService.get<Tache>(`${this.baseUrl}/${id}`);
  }

  getAllTaches(){
    return this.httpRepositoryService.get<Tache[]>(`${this.baseUrl}/all`);
  }

  updateTache(id: number, tache: Tache){
    return this.httpRepositoryService.put<Tache>(`${this.baseUrl}/update/${id}`, tache);
  }

  deleteTache(id: number) {
    return this.httpRepositoryService.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  updateTacheStatus(id: number, tache: Tache) {
    return this.httpRepositoryService.put<Tache>(`${this.baseUrl}/updateTacheStatus/${id}`, tache);
  }

  assignerTacheAUtilisateur(tacheId: number, userId: number): Observable<void> {
    return this.httpRepositoryService.post<void>(`${this.baseUrl}/${tacheId}/assign/${userId}`,null);
  }

  getAllTachesToDoByProjetId(projetId: number){
    return this.httpRepositoryService.get<Tache[]>(`${this.baseUrl}/to-do/${projetId}`);
  }

  getAllTachesDoingByProjetId(projetId: number) {
    return this.httpRepositoryService.get<Tache[]>(`${this.baseUrl}/DOGIN/${projetId}`);
  }

  getAllTachesDONEByProjetId(projetId: number) {
    return this.httpRepositoryService.get<Tache[]>(`${this.baseUrl}/DONE/${projetId}`);
  }
  getAllTachesByProjetId(projetId: number): Observable<Tache[]> {
    return this.httpRepositoryService.get<Tache[]>(`${this.baseUrl}/all/${projetId}`);
  }
}

