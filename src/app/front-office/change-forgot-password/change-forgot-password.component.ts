import { Component } from '@angular/core';
import { AuthentificationService } from 'src/shared/services/authentification.service';

@Component({
  selector: 'app-change-forgot-password',
  templateUrl: './change-forgot-password.component.html',
  styleUrls: ['./change-forgot-password.component.css']
})
export class ChangeForgotPasswordComponent {
constructor(private authService:AuthentificationService) {}
newPassword: string = '';
  repeatPassword: string = '';
  message: string = '';
  error: string | null = null;
  email: string = '';
  changePassword() {
    // Créez un objet ChangePassword avec les nouveaux mots de passe
    const changePasswordData: any = {
      password: this.newPassword,
      repeatPassword: this.repeatPassword
    };
    // Appelez la méthode changePassword du service avec l'email et le modèle ChangePassword
    this.authService.changePassword(changePasswordData, this.email).subscribe(
      (response) => {
        
        // Traitement de la réponse en cas de succès de changement de mot de passe
        this.message = response.message;
      },
      (error) => {
        // Gestion des erreurs en cas d'échec de changement de mot de passe
        this.message = error.error.message;
      }
    );
  }
  
}
