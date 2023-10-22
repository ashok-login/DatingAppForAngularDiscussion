import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.css']
})
export class TestErrorComponent {
  baseUrl = 'https://localhost:5001/api';
  constructor(private http: HttpClient) {}

  get404Error() {

  }

  get500Error() {

  }

  get401Error() {

  }

  get400ValidationError() {
    
  }
}
