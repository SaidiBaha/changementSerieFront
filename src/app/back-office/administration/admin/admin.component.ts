import { Component, OnInit, ViewChild } from '@angular/core';
import {UserService} from "../../../../shared/services/user.service";
import { Role, User } from 'src/shared/models/User';
import { Router } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { AuthentificationService } from 'src/shared/services/authentification.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  listUser!: User[];
  roles = Role;
  rolesArray = Object.values(Role);
  isEditMode = false;
  user: User = new User();
  idUser!: number;

  @ViewChild("dialog", { static: false }) dialog!: ModalComponent;

  constructor(private userService: UserService,private authService:AuthentificationService , private route: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getById(id: number) {
    this.userService.getUser(id).subscribe((user: any) => {
      console.log("user", user);
      this.openModal(user);
    });
  }

  openModal(user?: User) {
    if (user) {
      this.user = { ...user };
      this.isEditMode = true;
      this.idUser = user.idDto;
    } else {
      this.user = new User();
      this.isEditMode = false;
      this.idUser = undefined;
    }
    this.dialog?.open();
  }

  submitUser() {
    if (this.isEditMode) {
      this.updateUser();
    } else {
      this.createUser();
    }
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      res => {
        console.log("res", res);
        this.listUser = res;
      }
    );
  }

  createUser(): void {
    if (this.authService.getRole() === 'ADMIN') {
      this.userService.createUser(this.user).subscribe(response => {
        console.log(response);
        this.getUsers();
        this.dialog.close();
      });
    } else {
      console.error('Permission denied');
    }
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.getUsers();
    });
  }

  updateUser() {
    this.userService.updateUser(this.idUser, this.user).subscribe(() => {
      this.dialog.close();
      this.getUsers();
    });
  }

}


