import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User;
  inputText : string = 'Rahul Goti';

  constructor() {
    this.user = new User();
    this.user.name = 'Cyrus Patel';
    this.user.designation = 'Chief Technical Officer';
    this.user.address = 'Sydney, Australia';
    this.user.phone = ['1234646321', '88423286513']
  }

}
