import { Component } from '@angular/core';
import { AuthentificationService } from 'src/shared/services/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationSuccess = false;
  errorMessage = '';

  user = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  };

  constructor(private authentificationService: AuthentificationService) { }

  register(): void {
    this.authentificationService.register(this.user).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        this.registrationSuccess = true;
        setTimeout(() => this.registrationSuccess = false, 3000);
      },
      error: (error) => {
        this.errorMessage = "Une erreur est survenue lors de l'inscription.";
        console.error('Registration failed', error);
      }
    });
  }

}
