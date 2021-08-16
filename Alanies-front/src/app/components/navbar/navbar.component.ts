import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  Logged: any;
  ngOnInit(): void {
    this.authService.authStatus.subscribe((value) => {
      this.Logged = value;
    });
  }
  logOut() {
    localStorage.removeItem('jwt');
    this.authService.changeAuthStatus(false);
    this.router.navigateByUrl('login');
  }
}
