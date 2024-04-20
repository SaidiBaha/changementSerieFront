import { Component } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/shared/services/authentification.service';
import Swal from 'sweetalert2';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };
  errorMessage: string = '';  // Ajoutez cette ligne pour stocker le message d'erreur
  dialog: any;

  
  constructor(private authentificationService: AuthentificationService,
    private router: Router
    ) { }

    //1ére méthode
  /*authenticate(): void {
    this.authentificationService.authenticate(this.user).subscribe({
      next: (response) => {
        console.log('Authentication successful', response);
      },
      error: (error) => {
        console.error('Authentication failed', error);
      }
    });
  }*/


  //2éme méthode
 /* authenticate(): void {
    this.authentificationService.authenticate(this.user).subscribe({
      next: (response) => {
        console.log('Authentication successful', response);
        const role = this.authentificationService.getRole();
        if (role === 'ADMIN') {
          this.router.navigate(['/register']);
        } else if (role === 'USER') {
          this.router.navigate(['/user']);
        }
      },
      error: (error) => {
        console.error('Authentication failed', error);
      }
    });
  }*/

  authenticate(): void {
    this.authentificationService.authenticate(this.user).subscribe({
      next: (response) => {
        console.log('Authentication successful', response);
        const role = this.authentificationService.getRole();
        this.authentificationService.setLastName(response.lastname);// Stockez le nom de l'utilisateur
      
        if (role === 'ADMIN') {
          this.router.navigate(['/dashboard']);
        } else if (role === 'USER') {
          this.router.navigate(['/user']);
        } else if (role === 'MANAGER') {
          this.router.navigate(['/dashboard']);
        }
      },
    /*  error: (error) => {
        console.error('Authentication failed', error);
        this.errorMessage = error.message;  // Mettez à jour le message d'erreur
      }
    });*/  // hedhi traja3li ken code  "code": "BAD_CREDENTIALS"

    error: (error) => {
      console.error('Authentication failed', error);
      if (error.error && error.error.errors && error.error.errors.length > 0) {
        this.errorMessage = error.error.errors[0];
      } else {
        this.errorMessage = 'Une erreur est survenue lors de l\'authentification.';
      }
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Authentication failed. Please check your credentials.",
        
      });
    }
  });
  }
  

}
