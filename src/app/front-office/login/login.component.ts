import { Component } from '@angular/core';
import { AuthentificationService } from 'src/shared/services/authentification.service';

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

  
  constructor(private authentificationService: AuthentificationService) { }

  authenticate(): void {
    this.authentificationService.authenticate(this.user).subscribe({
      next: (response) => {
        console.log('Authentication successful', response);
      },
      error: (error) => {
        console.error('Authentication failed', error);
      }
    });
  }

}
