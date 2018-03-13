import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'practice-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userlist: User[] = [];

  constructor(
    private userservice: UserService,    //estamos inyectando userservice
    private router: Router) {          // aca estamos inyectando el router que nos proporciona navigate
                                      //navigate nos permite acceder a los atributos de user
  }                                   // como user.name ooooo user._id

  ngOnInit() {
    this.userservice.getUserList()
      .subscribe(
        (response) => {
          this.userlist = response.data;
        }, (error) => {
          console.log('error: ', error)
        }
      )
  }

  viewUser(userId: string):void{
    this.router.navigate(['user',userId,'view']);
  }

  editUser(userEditId: string):void{
    this.router.navigate(['user', userEditId, 'edit']);
  }

}
