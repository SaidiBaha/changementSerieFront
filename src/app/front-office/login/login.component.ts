import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
        if (role === 'ADMIN') {
          this.router.navigate(['/dashboard']);
        } else if (role === 'USER') {
          this.router.navigate(['/user']);
        } else if (role === 'MANAGER') {
          this.router.navigate(['/manager']);
        }
      },
      error: (error) => {
        console.error('Authentication failed', error);
      }
    });
  }

}
