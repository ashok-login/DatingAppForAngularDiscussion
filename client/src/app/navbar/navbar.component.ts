import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  model: any = {}

  constructor(public accountService: AccountService) { }

  login() {
    //Write code to save details in databse
    this.accountService.login(this.model).subscribe();
  }

  logout() {
    this.accountService.logout();
  }
}
