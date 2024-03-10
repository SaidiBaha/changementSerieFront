import { Component } from '@angular/core';
import { AuthentificationService } from 'src/shared/services/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

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
      },
      error: (error) => {
        console.error('Registration failed', error);
      }
    });
  }

}
