import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../shared/services/user.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    this.userService.getUser(1).subscribe( (user :any) => {
      console.log("useerrAsbaaaaaaaaaa",user)
    })
  }
}
