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
  showModal = false;
  user: User = new User();
@ViewChild("dialog",{static:false} )dialog!:ModalComponent;


  constructor(private userService : UserService, private route:Router) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUser(){
    this.userService.getUser(1).subscribe( (user :any) => {
      console.log("user",user)
    })
  }
openModal(){
  this.dialog?.open()
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

    }


    closeModal() {
      this.showModal = false;
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
  
}
