import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpRepositoryService } from "src/core/httpRepository.service";

@Injectable({
    providedIn: 'root'
  })
export class AuthentificationService {

    private BASE_URI = 'springMVC/api/v1/auth';

    constructor(private httpRepositoryService: HttpRepositoryService) { }


    register(data: any): Observable<any> {
        return this.httpRepositoryService.post(`${this.BASE_URI}/register`, data);
      }
    
      authenticate(data: any): Observable<any> {
        return this.httpRepositoryService.post(`${this.BASE_URI}/authenticate`, data);
      }
}