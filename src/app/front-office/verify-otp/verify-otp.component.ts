import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/shared/services/authentification.service';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent {
  email: string = '';
  otp: number;
  constructor(private authService: AuthentificationService,private router:Router) {}

  verifyOTP(otp: number, email: string): void {
    this.router.navigate(['/changePassForgot']);
    this.authService.verifyOTP(otp, email).subscribe(
      (response) => {
        // Traitement de la réponse en cas de succès de la vérification de l'OTP
        console.log('OTP vérifié avec succès:', response);
     
       
      },
      (error) => {
        // Gestion des erreurs en cas d'échec de la vérification de l'OTP
        console.error('Erreur lors de la vérification de l\'OTP:', error);
      }
    );
  }

}
