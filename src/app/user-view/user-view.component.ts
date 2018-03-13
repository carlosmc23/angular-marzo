import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'practice-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  userId: string;

  userViewed: User = {
    name: '',
    lastname: '',
    username: '',
    email: '',
    avatar: ''
  }

  constructor(
     private userservice: UserService,           //inyectamos el userservice
     private activatedroute: ActivatedRoute      //inyectamos el activateRoute
  ) { }

  ngOnInit() {
    this.activatedroute.params.subscribe(
      (paramss)=>{
        this.userId=paramss.id;
        this.userservice.getUserById(this.userId).subscribe(
          (response)=>{
            this.userViewed= response.data;
          },(error)=>{
            console.log('Error: ', error)
          }
        )
      }
    )
  }

}
