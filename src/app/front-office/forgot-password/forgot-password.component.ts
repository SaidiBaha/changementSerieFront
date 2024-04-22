import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthentificationService } from 'src/shared/services/authentification.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string = '';
  otp: number;
  newPassword: string = '';
  repeatPassword: string = '';
  showOTPInput: boolean = false;
  showChangePasswordForm: boolean = false;
  showSend:boolean=true;
  message: string = '';
  error: string | null = null;
  constructor(private authService: AuthentificationService) {}

  @ViewChild('otpInput') otpInputElement: ElementRef;
  
  sendEmail(email: string): void {
    console.log("Envoi de l'email...");
    this.authService.sendOTP(email).subscribe(
      (response) => {
         // Une fois que l'e-mail est envoyé avec succès, affichez le formulaire OTP
      this.showOTPInput = true;
      this.showSend=false;
      
      console.log("Formulaire OTP affiché.",response);
    // Assurez-vous que cette étape est masquée
    },
      (error) => {
        // Gérer les erreurs d'envoi de l        'e-mail ici
        console.log("test1");
        if (error && error.message) {
          this.error = error.message;
        } else {
          this.error = "An unknown error occurred.";
        }
      }
    );
      
  }

  verifyOTP(otp: number, email: string): void {
    this.authService.verifyOTP(otp, email).subscribe(
      (response) => {
        // Traitement de la réponse en cas de succès de la vérification de l'OTP
        console.log('OTP vérifié avec succès:', response);
     
        this.showOTPInput = false; // Masquer le formulaire OTP une fois qu'il est vérifié avec succès
        this.showChangePasswordForm = true; // Afficher le formulaire de changement de mot de passe
      },
      (error) => {
        // Gestion des erreurs en cas d'échec de la vérification de l'OTP
        console.error('Erreur lors de la vérification de l\'OTP:', error);
      }
    );
  }

  
 /* changePassword() {
    this.authService.changePassword(this.newPassword, this.repeatPassword, this.email).subscribe(
      (response) => {
        this.message = response.message;
      },
      (error) => {
        this.message = error.error.message;
      }
    );
  }*/
  changePassword() {
    // Créez un objet ChangePassword avec les nouveaux mots de passe
    const changePasswordData: any = {
      password: this.newPassword,
      repeatPassword: this.repeatPassword
    };
    // Appelez la méthode changePassword du service avec l'email et le modèle ChangePassword
    this.authService.changePassword(changePasswordData, this.email).subscribe(
      (response) => {
        this.showChangePasswordForm = true;
        // Traitement de la réponse en cas de succès de changement de mot de passe
        this.message = response.message;
      },
      (error) => {
        // Gestion des erreurs en cas d'échec de changement de mot de passe
        this.message = error.error.message;
      }
    );
  }
  
  scrollToOTPInput() {
    const otpElement = document.getElementById('otp');
    if (otpElement) {
      otpElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
}
