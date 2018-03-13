import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { Subscriber } from 'rxjs/Subscriber';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'practice-user-form-create',
  templateUrl: './user-form-create.component.html',
  styleUrls: ['./user-form-create.component.css']
})
export class UserFormCreateComponent implements OnInit {


  userToCreate: User = {
    name: '',
    lastname: '',
    username: '',
    password: '',
    email: ''
  }


  constructor(
    private userservice: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  createNewUser(): void {
    this.userservice.createUser(this.userToCreate)
      .subscribe(
        (response) => {
          console.log('respuesta del servidor :', response);
          alert("El usuario a sido Creado exitosamente");
          this.router.navigate(['home']);
        }, (error) => {
          console.log('error:', error)
        }
      )
  }
}
