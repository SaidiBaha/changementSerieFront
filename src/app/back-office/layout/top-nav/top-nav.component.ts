import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AuthentificationService } from 'src/shared/services/authentification.service';
import { NotificationService } from 'src/shared/services/notification.service';




import { Notif } from 'src/shared/models/Notif';
import { MatDialog } from '@angular/material/dialog';
import { NotificationDetailsComponent } from '../../planning-changement/notification-details/notification-details.component';






@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<void>();

  lastName: string = '';  // Ajoutez cette ligne pour stocker le nom de l'utilisateur
 

  userEmail: string = ''; // Remplacez ceci par l'email de l'utilisateur connecté


  private notificationsIntervalId: any;

notifications: Notif[] = [];




  constructor(
    private router: Router,
    private notificationService: NotificationService,
    private dialog: MatDialog,
    private authentificationService: AuthentificationService  // Injectez le service d'authentification
    ) {

  }

  ngOnInit() {
    this.userEmail = this.authentificationService.getEmail();
    console.log(this.userEmail)
    this.lastName = this.authentificationService.getLastName(); 
    this.loadNotifications(); // Récupérez le nom de l'utilisateur
    this.notificationsIntervalId = setInterval(() => this.loadNotifications(), 1000);
    console.log(this.lastName)
   }
   ngOnDestroy() {
    if (this.notificationsIntervalId) {
        clearInterval(this.notificationsIntervalId);
    }
}


get unreadNotificationsCount(): number {
  return this.notifications.filter(notification => !notification.read).length;
}

openNotificationDetails(notification: Notif) {
  this.markAsRead(notification.id); // Marquer la notification comme lue
  this.dialog.open(NotificationDetailsComponent, {
    data: { notification: notification }
  });
}

  toggleSidebar() {
    this.sideNavToggled.emit();
  }

  
  onLoggedout() {
    const userId = this.authentificationService.getCurrentUserId();
    let numericUserId = Number(userId);
   
      localStorage.removeItem('token'); // Supprimer le token ou autres informations d'authentification
      localStorage.removeItem('idUser');
      localStorage.removeItem('role');
      numericUserId = null;
      this.router.navigate(['/login']); // Rediriger vers la page de login
   
  }
  onReddirectProfile(){
    this.router.navigate(['/dashboard/utilisateur/userProfile']);
  }



  loadNotifications() {
    this.notificationService.getAllNotificationsByUser(this.userEmail).subscribe(notifications => {
      this.notifications = notifications.sort((a, b) => {
        // Convertir les timestamps en objets Date pour les comparer
        const dateA = new Date(a.timestamp);
        const dateB = new Date(b.timestamp);
        // Trier par ordre décroissant de timestamp
        return dateB.getTime() - dateA.getTime();
      });
    });
    // this.notificationService.getAllNotificationsByUser(this.userEmail).subscribe(notifications => {
    //   this.notifications = notifications;
    // });
  }

  markAsRead(notificationId: number) {
    this.notificationService.markNotificationAsRead(notificationId).subscribe(() => {
      this.loadNotifications(); // Recharger les notifications après avoir marqué une comme lue
    });
  }

}
