import { Component } from '@angular/core';
import { ChangePasswordRequest } from 'src/shared/models/ChangePasswordRequest ';
import { User } from 'src/shared/models/User';
import { AuthentificationService } from 'src/shared/services/authentification.service';

import { UserService } from 'src/shared/services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  request: ChangePasswordRequest = {
    currentPassword: '',
    newPassword: '',
    confirmationPassword: ''
  };
  user: User | undefined;
  constructor(private userService: UserService,private authService:AuthentificationService) { }

  changePassword() {
    // Supposons que vous obteniez les informations de l'utilisateur connecté à partir d'un service d'authentification
    //const connectedUser = this.authService.getCurrentUserId(); // Utilisez votre propre méthode pour obtenir les informations de l'utilisateur connecté
 
    const connectedUser = this.authService.getConnectedUser();
    console.log(connectedUser)
    this.userService.changePassword(this.request, connectedUser).subscribe(() => {
      console.log('Mot de passe changé avec succès');
      // Réinitialiser le formulaire ou rediriger vers une autre page
    }, error => {
      console.error('Erreur lors du changement de mot de passe : ', error);
      // Gérer les erreurs
    });
  }

}
