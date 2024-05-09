import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/shared/models/User';
import { AuthentificationService } from 'src/shared/services/authentification.service';
import { UserService } from 'src/shared/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent  implements OnInit {


  user: User | undefined;
 
  
  constructor(
    private router: Router,private authService:AuthentificationService,
    private userservice:UserService
  ) { }
 
  ngOnInit(): void {
    const userId = this.authService.getCurrentUserId();
    const numericUserId = Number(userId);

    this.userservice.getUser(numericUserId).subscribe(
      (data: any) => {
        this.user = data; // Stocker les détails de l'utilisateur récupéré dans la variable user
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  modifierMotDePasse(): void {
    this.router.navigate(['/dashboard/utilisateur/changepsw']);
  }

}
