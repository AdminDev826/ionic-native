import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from '@angular/http';
import { User } from "../models/User";
import 'rxjs/add/operator/map';
 

 
@Injectable()
export class AuthService {
  currentUser = new  User

  constructor(public http: Http){}
 
  public login(credentials) {
    if (credentials.idemail === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        let o_this = this
        // let url = 'https://www.reddit.com/r/gifs/new/.json?limit=10';
        let url = 'http://dateworld.co:8080/accounts/resources/login';
        var headers = new Headers({
            "Access-Control-Allow-Origin" : "*",
            "Access-Control-Allow-Methods" : "POST, GET, OPTIONS, PUT",
            "Content-Type": "application/json",
            "Accept": "application/json"
        });
        let header_options = new RequestOptions({headers: headers});
        console.log(header_options)
        var postData = {
            idemail: parseInt(credentials.idemail),
            password: credentials.password
        };

        this.http.post(url, postData).map(res => res.json()).subscribe(data => {
          console.log(data);
          if(data.error == ''){
              o_this.currentUser = data;
              observer.next(true);
          }else{
              console.log(data.error);
              observer.next(false);
          }
        }, (error)=> {
          console.log(error);
          observer.next(false);
        });
      });
    }
  }
 
  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      let url = "http://dateworld.co:8080/accounts/resources/register";

      return Observable.create(observer => {
          this.http.post(url, credentials).map(res => res.json()).subscribe(data => {
          console.log(data);
          if(data.error == ''){
              this.currentUser.firstname = credentials.firstname
              this.currentUser.lastname = credentials.lastname
              this.currentUser.address1 = credentials.address1
              this.currentUser.address2 = credentials.address2
              this.currentUser.city = credentials.city
              this.currentUser.country = credentials.country
              this.currentUser.tel = credentials.tel
              this.currentUser.email = credentials.email
              this.currentUser.password = credentials.password

              this.currentUser.id = data.id

              observer.next(true);
          }else {
              console.log(data.error)
              observer.next(false);
          }
        }, (error)=> {
          console.log(error);
          observer.next(false);
        });
      });
    }
  }
 
  public getUserInfo() : User {
    console.log(this.currentUser)
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}