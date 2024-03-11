import { Injectable } from '@angular/core';
import { HttpRepositoryService } from 'src/core/httpRepository.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URI = 'springMVC/api/v1/users';

  constructor(private httpRepositoryService: HttpRepositoryService) { }

  getUser(userId: any) {
    return this.httpRepositoryService.get<any>(`${this.BASE_URI}/${userId}`);
  }
  getUsers(){
    return this.httpRepositoryService.get<any>(this.BASE_URI);
  }

  
}
