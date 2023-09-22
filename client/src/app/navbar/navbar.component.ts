import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  model: any = {}

  constructor(public accountService: AccountService, private router: Router) { }

  login() {
    this.accountService.login(this.model).subscribe({
      next: _ => this.router.navigateByUrl('/members'),
      error: error => console.log(error),
    });
  }

  logout() {
    let result = confirm('Are you sure you want to logout?');
    if (result == true) {
      this.accountService.logout();
      this.router.navigateByUrl('/');
    }
  }
}
