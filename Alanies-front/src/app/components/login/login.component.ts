import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.minLength(8)),
  });
  ngOnInit(): void {}

  login() {
    this.authService.login(this.loginForm.value).subscribe((data: any) => {
      console.log('data', data);
      localStorage.setItem('jwt', data['jwta']);
      this.authService.changeAuthStatus(true);
      this.router.navigateByUrl('/url');
    });
  }
}
