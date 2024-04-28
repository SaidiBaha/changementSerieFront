import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpRepositoryService } from "src/core/httpRepository.service";


@Injectable({
    providedIn: 'root'
  })
export class ForgetpassxordService {

    private BASE_URI = 'springMVC/forgotPassword';

    constructor(private httpRepositoryService: HttpRepositoryService) { }


     /*Oumaima's work*/
  getConnectedUser() {
    // Supposons que vous stockez les informations de l'utilisateur connecté dans le localStorage après l'authentification
    // Vous pouvez ajuster cette méthode selon la manière dont vous stockez et récupérez les informations de l'utilisateur dans votre application
    const connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
    return connectedUser;
  }
  
  sendOTP(email: string): Observable<any> {
    return this.httpRepositoryService.post(`${this.BASE_URI}/verifyMail/${email}`,{} );
  }

  // verifyOTP(otp: number, email: string): Observable<any> {
  //   return this.httpRepositoryService.post<any>(`${this.FORGOT_PASSWORD_URI}/verifyOtp/${otp}/${email}`, { otp,email });
  // }

  verifyOTP(otp: number, email: string): Observable<any> {
    return this.httpRepositoryService.post<any>(`${this.BASE_URI}/verifyOtp/${otp}/${email}`, {});
  }
  
 /* changePassword(newPassword: string, repeatPassword: string, email: string): Observable<any> {
    const body = {
      newPassword: newPassword,
      repeatPassword: repeatPassword // Ajouter repeatPassword dans le corps de la requête
    };
    return this.httpRepositoryService.post<any>(`${this.FORGOT_PASSWORD_URI}/changePassword/${email}`, body);
  }*/

  changePassword(changePassword: any, email: string): Observable<any> {
    const body = {
      password: changePassword.password,
      repeatPassword: changePassword.repeatPassword
    };
    return this.httpRepositoryService.post<any>(`${this.BASE_URI}/changePassword/${email}`, body);
  }

}