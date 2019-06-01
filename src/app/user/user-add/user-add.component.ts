import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  userForm: FormGroup;
  disabled: false;

  constructor(private _userService: UserService,
    private _builder: FormBuilder,
    private route: Router) {
   }

  ngOnInit() {
    this.userForm = this._builder.group({
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      email: '',
      phoneNumber: '',
      address: ''
    });
  }

  addUser() {
    this._userService.createUser(this.userForm.value).subscribe(
      () => this.route.navigate(['/users'])
    );
    
  }
}
