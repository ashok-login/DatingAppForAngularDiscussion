import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  baseUrl = 'https://localhost:5001/api/';
  registerMode: boolean = false;
  users: any;

  constructor(private http: HttpClient, private accountService: AccountService, private router: Router){}

  ngOnInit(): void {
    this.http.get(this.baseUrl + 'users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request has been completed')
    });
  }

  toggleRegisterMode() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterModel(event: boolean) {
    this.registerMode = event;
  }

  NavigateMeToMessages() {
    this.router.navigateByUrl('messages');
  }
}
