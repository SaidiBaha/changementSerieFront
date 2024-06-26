import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from 'src/shared/services/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthentificationService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isAuthenticated = !!this.authService.getRole(); // Vérifiez si l'utilisateur est authentifié

    if (!isAuthenticated) {
      return this.router.parseUrl('/login'); // Redirigez vers la page de connexion si non authentifié
    }

    const expectedRoles = route.data['expectedRoles'] as Array<string>;
    const currentRole = this.authService.getRole();

    if (currentRole && expectedRoles.includes(currentRole)) {
      return true;
    }

    return this.router.parseUrl('/dashboard/administration/unauthorized'); // Redirigez vers la page non autorisée si le rôle ne correspond pas
  }

}
