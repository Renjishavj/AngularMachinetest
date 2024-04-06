import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: any[] = [
    { name: 'John Doe', email: 'john@example.com', phone: '1234567890' },
    { name: 'Jane Doe', email: 'jane@example.com', phone: '9876543210' }
  ];

  inputValue: string = '';

  constructor() {}

}
