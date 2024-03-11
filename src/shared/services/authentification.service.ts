import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";
import { HttpRepositoryService } from "src/core/httpRepository.service";

@Injectable({
    providedIn: 'root'
  })
export class AuthentificationService {

    private BASE_URI = 'springMVC/api/v1/auth';
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
        this.currentUser = response.user;
        localStorage.setItem('role', response.role);  // Stockez le rôle dans le localStorage
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

  logout(): void {
    this.currentUser = null;
  }


//teb3a 2éme méthode 
 /* getRole(): string | null {
    return this.currentUser ? this.currentUser.role : null;
  }*/
}