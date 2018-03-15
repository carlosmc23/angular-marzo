import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'practice-user-form-login',
  templateUrl: './user-form-login.component.html',
  styleUrls: ['./user-form-login.component.css']
})
export class UserFormLoginComponent implements OnInit {



  constructor(private authservice: AuthService ) { }

  credentials = {
    username: '',
    password: ''
  }

  ngOnInit() {
  }
  login(): void {
    this.authservice.login(this.credentials)
      .subscribe(
        (response) => {
          console.log('respuestaa: ', response);
          sessionStorage.removeItem('token');
          sessionStorage.setItem('token', response.token);
        }, (error) => {
          console.log('error: ', error);
        }
      );

  }

}
