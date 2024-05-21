import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/shared/services/user.service'
import { User } from 'src/shared/models/User';
import { AuthentificationService } from 'src/shared/services/authentification.service';

@Component({
  selector: 'app-modifier-profil',
  templateUrl: './modifier-profil.component.html',
  styleUrls: ['./modifier-profil.component.css']
})
export class ModifierProfilComponent implements OnInit{
  constructor(
    private router: Router,
    private userservice:UserService,
    private auth:AuthentificationService
  ) { }
  user:User=new User();
  ngOnInit(): void {
  }
  
  updateUser(): void {
    const userId = this.auth.getCurrentUserId();
    const numericUserId = Number(userId);
    this.userservice.updateUser(numericUserId, this.user).subscribe(
      updatedUser => {
        console.log('Utilisateur mis à jour avec succès :', updatedUser);
        // Autres actions après la mise à jour de l'utilisateur
      },
      error => {
        console.error('Erreur lors de la mise à jour de l\'utilisateur :', error);
        // Gestion des erreurs
      }
    );
  }
  
}
