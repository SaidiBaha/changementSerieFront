import { Injectable } from "@angular/core";
import { HttpRepositoryService } from "src/core/httpRepository.service";
import { Notif } from "../models/Notif";


@Injectable({
    providedIn: 'root'
  })
export class NotificationService {

   
    private BASE_URI = 'springMVC/api/v1/planning/notifications';

    constructor(private httpRepositoryService: HttpRepositoryService) { }
  
    getAllNotificationsByUser(email: string) {
      return this.httpRepositoryService.get<Notif[]>(`${this.BASE_URI}/user?email=${email}`);
    }
  
    markNotificationAsRead(notificationId: number) {
      return this.httpRepositoryService.post(`${this.BASE_URI}/markAsRead/${notificationId}`, null);
    }
  


}