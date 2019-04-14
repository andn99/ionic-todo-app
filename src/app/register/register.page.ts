import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth/auth.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onRegister(registerForm: NgForm) {
    // tslint:disable-next-line:max-line-length
    const userData = new UserService(registerForm.value.firstName, registerForm.value.lastName, registerForm.value.email, registerForm.value.password);
    this.authService.register(userData);
  }
}
