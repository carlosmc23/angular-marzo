import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { User } from "../model/user";

const userApiUrl = 'http://localhost:3000/users';

@Injectable()
export class UserService {



  constructor(private httpclient: HttpClient) { //estamos inyectando HttpClient

  }

  getUserList(): Observable<any> {
    return this.httpclient.get(userApiUrl);   //aca solo estamos haciendo un get a users del backend
  }

  getUserById(userId: string): Observable<any> {
    return this.httpclient.get(`${userApiUrl}/${userId}`);//hacemos un get y le pasamos el id
  }

  createUser(newUser: User): Observable<any> {
    return this.httpclient.post(userApiUrl, newUser);
  }

  updateUser(editUser: User, userId:string): Observable<any>{
    return this.httpclient.put(`${userApiUrl}/${userId}`,editUser);
  }
}
