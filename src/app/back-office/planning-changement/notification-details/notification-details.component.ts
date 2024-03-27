import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Notif } from 'src/shared/models/Notif';

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.css']
})
export class NotificationDetailsComponent {
 

   // Utilisez MAT_DIALOG_DATA pour injecter les données passées au dialogue
   constructor(
    public dialogRef: MatDialogRef<NotificationDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { notification: Notif }
  ) {}

   // Méthode pour fermer le dialogue
   close() {
    this.dialogRef.close();
  }

}
