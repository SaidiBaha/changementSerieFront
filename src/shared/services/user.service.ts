import { Injectable } from '@angular/core';
import { HttpRepositoryService } from 'src/core/httpRepository.service';
import { User } from '../models/User';
import { ChangePasswordRequest } from '../models/ChangePasswordRequest ';
import { Observable } from 'rxjs';


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

  createUser(user: User){
    return this.httpRepositoryService.post<User>(this.BASE_URI,user)

  }
  updateUser(id: number, user: User) {
    return this.httpRepositoryService.put<User>(`${this.BASE_URI}/${id}`, user);
  }

  deleteUser(id: number) {
    return this.httpRepositoryService.delete<void>(`${this.BASE_URI}/${id}`);
  }

  changePassword(request: ChangePasswordRequest,connectedUser: any): Observable<any> {
    return this.httpRepositoryService.patch(`${this.BASE_URI}/changePassword`, { request, connectedUser } );
  }
  
}
