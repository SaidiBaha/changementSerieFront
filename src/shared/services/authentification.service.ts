import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";
import { HttpRepositoryService } from "src/core/httpRepository.service";


@Injectable({
    providedIn: 'root'
  })
export class AuthentificationService {

    private BASE_URI = 'springMVC/api/v1/auth';
    private FORGOT_PASSWORD_URI = `springMVC/forgotPassword`;
    currentUser: any = null;

    constructor(private httpRepositoryService: HttpRepositoryService) { }


    register(data: any): Observable<any> {
        return this.httpRepositoryService.post(`${this.BASE_URI}/register`, data);
      }
    //1ere méthode just ken reponse w generer le token
    /*  authenticate(data: any): Observable<any> {
        return this.httpRepositoryService.post(`${this.BASE_URI}/authenticate`, data);
      }*/


      

//2éme méthode 
 /* authenticate(data: any): Observable<any> {
    return this.httpRepositoryService.post(`${this.BASE_URI}/authenticate`, data).pipe(
      tap(response => {
        this.currentUser = response.user;
      })
    );
  }*/

  authenticate(data: any): Observable<any> {
    return this.httpRepositoryService.post(`${this.BASE_URI}/authenticate`, data).pipe(
      tap(response => {
        localStorage.setItem('token', response.token); // Continuez de stocker le JWT si présent
        localStorage.setItem('idUser', response.idUser); // Stockez l'ID utilisateur
        localStorage.setItem('role', response.role); // Stockez le rôle
        this.currentUser = response.user; // Mise à jour de l'utilisateur courant
        this.setUser(response); // Mise à jour de l'utilisateur courant avec la réponse d'authentification
      }),
      
    /*  catchError(error => {
        // Propagez l'erreur pour la traiter dans le composant
        return throwError(() => new Error(error.error.message || 'Erreur de connexion'));
      })*/
      catchError(error => throwError(() => error)) //renviyer l'erreur complète

    );
  }
  getRole(): string {
    return localStorage.getItem('role') || '';
  }
  getCurrentUserId(): string | null {
    return localStorage.getItem('idUser');
  }
  

  logout(): void {
    this.currentUser = null;
  }


//teb3a 2éme méthode 
 /* getRole(): string | null {
    return this.currentUser ? this.currentUser.role : null;
  }*/

  private lastName: string = '';  // Ajoutez cette ligne pour stocker le nom de l'utilisateur
  private email: string = '';

  // Autres méthodes et propriétés du service...

  setLastName(lastName: string): void {
    this.lastName = lastName;
  }

  getLastName(): string {
    return this.lastName;
  }
  

 //hedhi pour Remplacez  par l'email de l'utilisateur connecté

 private user: any = null; // Remplacez 'any' par le type approprié pour votre objet de réponse d'authentification

  // Appelée lorsque l'utilisateur se connecte
  setUser(authResponse: any) { // Remplacez 'any' par le type approprié
    this.user = authResponse;
  }

  getEmail(): string | null {
    return this.user ? this.user.username : null;
  }
  /*Oumaima's work*/
  
  sendOTP(email: string): Observable<any> {
    return this.httpRepositoryService.post<any>(`${this.FORGOT_PASSWORD_URI}/verifyMail/${email}`,{} );
  }

  verifyOTP(otp: number, email: string): Observable<any> {
    return this.httpRepositoryService.post<any>(`${this.FORGOT_PASSWORD_URI}/verifyOtp/${email}`, { otp });
  }

  changePassword(newPassword: string, email: string): Observable<any> {
    return this.httpRepositoryService.post<any>(`${this.FORGOT_PASSWORD_URI}/forgotPassword/changePassword/${email}`, { newPassword });
  }
}