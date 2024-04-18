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
  message: string = '';
  error: string | null = null;
  constructor(private authService: AuthentificationService) {}
  @ViewChild('otpInput') otpInputElement: ElementRef;
  sendEmail(email: string): void {
    this.authService.sendOTP(email).subscribe(
      () => {
        // Une fois que l'e-mail est envoyé avec succès, affichez le formulaire OTP
        this.showOTPInput = true;
        this.scrollToOTPInput();
      },
      (error) => {
        // Gérer les erreurs d'envoi de l'e-mail ici
        if (error && error.message) {
          this.error = error.message;
        } else {
          this.error = "An unknown error occurred.";
        }
      }
    );
      
  }

  verifyOTP() {
    // Récupérer la valeur de l'OTP saisie par l'utilisateur à partir du modèle de formulaire
    const userEnteredOTP = this.otp;
  
    this.authService.verifyOTP(userEnteredOTP, this.email).subscribe(
      (response) => {
        this.message = response.message;
        this.showChangePasswordForm = true;
      },
      (error) => {
        this.message = error.error.message;
      }
    );
  }

  changePassword() {
    this.authService.changePassword(this.newPassword, this.email).subscribe(
      (response) => {
        this.message = response.message;
      },
      (error) => {
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
