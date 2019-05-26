import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  userForm: FormGroup;

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
    this._userService.createUser(this.userForm.value).subscribe();
    this.route.navigate(['/users']);
  }
}
