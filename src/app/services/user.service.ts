import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { User } from "../model/user";


@Injectable()
export class UserService {

myhttpClient: HttpClient;

  constructor(inserthttpclient:HttpClient) { 
    this.myhttpClient= inserthttpclient;
  }


}
