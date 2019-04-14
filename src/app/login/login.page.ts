import { AuthService } from './../core/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onLogin(form: NgForm) {
    console.log(form.value);
    this.authService.login(form.value.email, form.value.password);
  }
}
