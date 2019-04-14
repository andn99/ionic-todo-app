import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  firstname = '';
  lastname = '';
  email = '';
  password = '';
  token = '';
  constructor(firstname: string, lastname: string, email: string, password: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
  }
}
