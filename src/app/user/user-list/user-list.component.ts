import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  header: String[] = ["#", "Name", "Age", "Gender", "Email", "Phone Number", "Address"];
  users: User[];
  constructor(private _userService: UserService) { 
  }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(): User[] {
    this._userService.getAllUsers().subscribe( users => this.users = users);
    return this.users;
  }
}
