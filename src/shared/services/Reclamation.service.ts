import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpRepositoryService } from 'src/core/httpRepository.service';
import { Reclamation } from '../models/Reclamation';



@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  private baseUrl = 'springMVC/api/v1/reclamation';

  constructor(private httpRepositoryService: HttpRepositoryService,private http: HttpClient) { }

  // saveReclamation(reclamation: Reclamation, userId: number){
  //   return this.httpRepositoryService.post<Reclamation>(`${this.baseUrl}/save/${userId}`, reclamation);
  // }
  saveReclamation(dto: Reclamation, userId: number, emailRes: string) {
    return this.httpRepositoryService.post<Reclamation>(`${this.baseUrl}/save/${userId}/${emailRes}`, dto);
  }
  

  getReclamationById(id: number){
    return this.httpRepositoryService.get<Reclamation>(`${this.baseUrl}/${id}`);
  }

  getAllReclamations() {
    return this.httpRepositoryService.get<Reclamation[]>(`${this.baseUrl}/all`);
  }

  updateReclamation(id: number, reclamation: Reclamation) {
    return this.httpRepositoryService.put<Reclamation>(`${this.baseUrl}/update/${id}`, reclamation);
  }

  deleteReclamation(id: number){
    return this.httpRepositoryService.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}