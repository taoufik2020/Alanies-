import { UserService } from './../../services/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    name: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null),
  });
  constructor(private userService: UserService) {}

  ngOnInit(): void {}
  submit() {
    this.userService.addUser(this.registerForm.value).subscribe((data) => {
      console.log('data', data);
    });
  }
}
