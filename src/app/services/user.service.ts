import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { User } from "../model/user";


@Injectable()
export class UserService {

  myhttpClient: HttpClient;

  constructor(inserthttpclient: HttpClient) {
    this.myhttpClient = inserthttpclient;
  }

  getUserList(): User[] {
    let userlist :User[] = [];
    userlist.push({
      name: 'gabriel 0',
      lastname: 'meneses',
      username: 'gabriel123',
      email: 'gabriel@correo.com',
    });
    userlist.push({
      name: 'gabriel 1',
      lastname: 'meneses',
      username: 'gabriel123',
      email: 'gabriel@correo.com',
    });
    userlist.push({
      name: 'gabriel 2',
      lastname: 'meneses',
      username: 'gabriel123',
      email: 'gabriel@correo.com',
    });
    userlist.push({
      name: 'gabriel 3',
      lastname: 'meneses',
      username: 'gabriel123',
      email: 'gabriel@correo.com',
    });
    return userlist;

  }
}
