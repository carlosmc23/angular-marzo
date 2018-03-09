import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'practice-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userlist : User []= [];

  constructor() { 

  this.userlist.push ({
    name: 'gabriel 0',
    lastname: 'meneses',
    username:'gabriel123',
    email:'gabriel@correo.com',
  });
  this.userlist.push ({
    name: 'gabriel 1',
    lastname: 'meneses',
    username:'gabriel123',
    email:'gabriel@correo.com',
  });
  this.userlist.push ({
    name: 'gabriel 2',
    lastname: 'meneses',
    username:'gabriel123',
    email:'gabriel@correo.com',
  });
  this.userlist.push ({
    name: 'gabriel 3',
    lastname: 'meneses',
    username:'gabriel123',
    email:'gabriel@correo.com',
  });

}

  ngOnInit() {
  }

}
