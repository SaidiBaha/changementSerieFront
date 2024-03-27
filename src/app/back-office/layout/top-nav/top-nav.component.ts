import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/shared/services/authentification.service';



@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<void>();

  lastName: string = '';  // Ajoutez cette ligne pour stocker le nom de l'utilisateur

  


  constructor(
    private router: Router,
    private authentificationService: AuthentificationService  // Injectez le service d'authentification
    ) {

  }

  ngOnInit() {
    this.lastName = this.authentificationService.getLastName();  // Récupérez le nom de l'utilisateur
    console.log(this.lastName)
   }

  toggleSidebar() {
    this.sideNavToggled.emit();
  }
  onLoggedout() {

  }
  onReddirectProfile(){
    this.router.navigate(['/dashboard/profile']);
  }


}
