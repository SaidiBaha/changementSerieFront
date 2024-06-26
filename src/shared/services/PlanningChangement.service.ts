import { Injectable } from '@angular/core';
import { HttpRepositoryService } from 'src/core/httpRepository.service';
import { PlanningChangementSerie } from '../models/PlanningChangementSerie ';
import { PlanningInfoDto } from '../models/PlanningInfo';


@Injectable({
  providedIn: 'root'
})
export class PlanningChangementSerieService {

  private BASE_URI = 'springMVC/api/v1/planning';

  constructor(private httpRepositoryService: HttpRepositoryService) { }

  createPlanning(planning: PlanningChangementSerie) {
    return this.httpRepositoryService.post<PlanningChangementSerie>(`${this.BASE_URI}`, planning);
  }

  getPlanningById(id: number) {
    return this.httpRepositoryService.get<PlanningChangementSerie>(`${this.BASE_URI}/${id}`);
  }

  getAllPlannings() {
    return this.httpRepositoryService.get<PlanningChangementSerie[]>(`${this.BASE_URI}`);
  }

  updatePlanning(id: number, planning: PlanningChangementSerie) {
    return this.httpRepositoryService.put<PlanningChangementSerie>(`${this.BASE_URI}/${id}`, planning);
  }

  deletePlanning(id: number) {
    return this.httpRepositoryService.delete<void>(`${this.BASE_URI}/${id}`);
  }

  createPlanningWithFilteredChecklists(planning: PlanningChangementSerie, nomFamille: string, nomProduit: string) {
    return this.httpRepositoryService.post<PlanningChangementSerie>(`${this.BASE_URI}/createWithFilteredChecklists?nomFamille=${nomFamille}&nomProduit=${nomProduit}`, planning);
  }

  /*markNotificationAsRead(notificationId: number) {
    return this.httpRepositoryService.post<void>(`${this.BASE_URI}/notifications/markAsRead/${notificationId}`);
  }*/
  
  

/*
  getAllNotifications() {
    return this.httpRepositoryService.get<Notification[]>(`${this.BASE_URI}/notifications`);
  }

  getNotificationsByUser(email: string) {
    return this.httpRepositoryService.get<Notification[]>(`${this.BASE_URI}/notifications/user?email=${email}`);
  }*/

  getPlanningInfo(id: number) {
    return this.httpRepositoryService.get<PlanningInfoDto>(`${this.BASE_URI}/${id}/info`);
  }
  
}
