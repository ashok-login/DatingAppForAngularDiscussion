import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Dept } from './_models/dept';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  baseUrl = 'http://localhost:5000/api/';
  users: any;
  jsonString: string = '';

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get(this.baseUrl + 'users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed')
    });

    /* Begin: JSON.stringify() method example */
    const dept: Dept = {
      id: 10,
      deptName: 'Accounting',
      loc: 'New York'
    };
    this.jsonString = JSON.stringify(dept);
    console.log(this.jsonString);
    /* End: JSON.stringify() method example */
  }
}
