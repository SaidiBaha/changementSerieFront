import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../shared/services/user.service";
import { User } from 'src/shared/models/User';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  listUser!:User[];

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUserById(){
    this.userService.getUser(1).subscribe( (user :any) => {
      console.log("useerrAsbaaaaaaaaaa",user)
    })
  }

  getUsers(){
    this.userService.getUsers().subscribe(

      res=>{
        console.log("res",res);
        this.listUser=res
      }
    )
  }

  
}
