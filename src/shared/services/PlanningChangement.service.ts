import { Injectable } from '@angular/core';
import { HttpRepositoryService } from 'src/core/httpRepository.service';
import { EtatChangement, PlanningChangementSerie } from '../models/PlanningChangementSerie ';
import { PlanningInfoDto } from '../models/PlanningInfo';
import { BehaviorSubject, Observable } from 'rxjs';


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

  createPlanningWithFilteredChecklists(planning: PlanningChangementSerie, nomFamille: string) {
    return this.httpRepositoryService.post<PlanningChangementSerie>(`${this.BASE_URI}/createWithFilteredChecklists?nomFamille=${nomFamille}`, planning);
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

  getChecklistIdsByPlanningId(planningId: number): Observable<number[]> {
    return this.httpRepositoryService.get<number[]>(`${this.BASE_URI}/${planningId}/checklists`);
  }


  getAvancementChecklistValidation1(planningId: number): Observable<number> {
    return this.httpRepositoryService.get<number>(`${this.BASE_URI}/${planningId}/avancement-checklist-validation1`);
  }

  getAvancementChecklistValidation2(planningId: number): Observable<number> {
    return this.httpRepositoryService.get<number>(`${this.BASE_URI}/${planningId}/avancement-checklist-validation2`);
  }

  getAvancementTotal(planningId: number): Observable<number> {
    return this.httpRepositoryService.get<number>(`${this.BASE_URI}/${planningId}/avancement-total`);
  }

  getEtatChangement(planningId: number): Observable<EtatChangement> {
    return this.httpRepositoryService.get<EtatChangement>(`${this.BASE_URI}/${planningId}/etat-changement`);
  }
  
// des fonction pour mettre le bouton de ListchecklistVal2 est [disabled]
  private _isUpdateInProgress: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  setIsUpdateInProgress(value: boolean): void {
    this._isUpdateInProgress.next(value);
  }

  getIsUpdateInProgress(): Observable<boolean> {
    return this._isUpdateInProgress.asObservable();
  }
  
}
