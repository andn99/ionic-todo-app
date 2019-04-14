import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from 'src/app/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState = new BehaviorSubject(false);

  constructor() {}

  public login(email: string, password: string) {
    this.authState.next(true);
  }

  public logout() {
    this.authState.next(false);
  }

  public register(user: UserService) {
    console.log('Register: ', user);
  }

  public isAuthenticated(): boolean {
    return this.authState.value;
  }
}
