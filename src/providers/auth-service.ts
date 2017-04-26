import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
 
export class User {
  id: number;
  firstname: string;
  lastname: string;
  address1: string;
  address2: string;
  city: string;
  country: string;
  tel: string;
  email: string;
  password: string;
  error: string;
}
 
@Injectable()
export class AuthService {
  currentUser = new  User

  constructor(public http: Http){}
 
  public login(credentials) {
    if (credentials.idemail === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
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

        this.http.post(url, postData).map(res => res.json() as User).subscribe(data => {
          console.log(data);
          this.currentUser = data;
          console.log(this.currentUser);
          observer.next(true);
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
      var postData = {
        firstname: credentials.firstname,
        lastname: credentials.lastname,
        address1: credentials.address1,
        address2: credentials.address2,
        city: credentials.city,
        country: credentials.country,
        tel: credentials.tel,
        email: credentials.email,
        password: credentials.password
      }

      return Observable.create(observer => {
          this.http.post(url, credentials).map(res => res.json()).subscribe(data => {
          console.log(data);
          
          observer.next(true);
        }, (error)=> {
          console.log(error);
          observer.next(false);
        });
      });
    }
  }
 
  public getUserInfo() : User {
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