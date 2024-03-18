import { Component, OnInit, ViewChild } from '@angular/core';
import {UserService} from "../../../../shared/services/user.service";
import { Role, User } from 'src/shared/models/User';
import { Router } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  listUser!:User[];
  roles = Role;
  isEditMode = false; // Ajoutez cette propriété pour suivre le mode de la modal
  user: User = new User();
  idUser! : number; 

@ViewChild("dialog",{static:false} )dialog!:ModalComponent; //hedhi l modal gernerique


  constructor(private userService : UserService, private route:Router) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getById(id : number){
    this.userService.getUser(id).subscribe((user: any) => {
      console.log("user", user);
      this.openModal(user); // Ouvre le modal en mode édition avec les données de l'utilisateur
    });
  }

  // hedhi fonction ki tibda 3ana modal wahda 
/*openModal(){
  this.dialog?.open()
}*/

openModal(user?: User) {
  if (user) {
    // Si un utilisateur est passé en argument, remplissez le formulaire pour la mise à jour
    this.user = { ...user };
    this.isEditMode = true;
    this.idUser = user.idDto; // Assurez-vous que l'ID est conservé pour la mise à jour
  } else {
    // Sinon, réinitialisez le formulaire pour ajouter un nouvel utilisateur
    this.user = new User();
    this.isEditMode = false;
    this.idUser = undefined;
  }
  this.dialog?.open();
}

submitUser() {
  if (this.isEditMode) {
    this.updateuser();
  } else {
    this.createUser();
  }
}




  getUsers(){
    this.userService.getUsers().subscribe(

      res=>{
        console.log("res",res);
        this.listUser=res
      }
    )
  }

  createUser(): void {
    this.userService.createUser(this.user)
      .subscribe(response => {
        console.log(response);
        
        // Faire quelque chose avec la réponse
        // (rediriger vers une autre page, afficher un message de confirmation, etc.)
        this.userService.getUsers().subscribe(
          res=>{
            console.log("res",res);
            this.listUser=res
          }
        )
      });
      this.dialog.close()
      this.getUsers(); // Rechargez la liste après l'ajout

    }


 


    deleteUser(id : number){
    
      this.userService.deleteUser(id).subscribe((response)=> {
        this.userService.getUsers().subscribe(
          res=>{
            console.log("res",res);
            
            this.listUser=res
          }
        )
        
      })
    }

    updateuser(){
      this.userService.updateUser(this.idUser, this.user).subscribe(() => {
        this.dialog.close();
        this.getUsers(); // Rechargez la liste après la mise à jour
      });
    }



}


