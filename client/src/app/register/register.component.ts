import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Input() UsersOnHomePage: any;
  model: any = {};
  register() {
    console.log(this.model);
  }

  cancel() {
    console.log('Clicked on Cancel button');
  }
}
