import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, count } from 'rxjs';

@Component({
  selector: 'app-promise-vs-observable',
  templateUrl: './promise-vs-observable.component.html',
  styleUrls: ['./promise-vs-observable.component.css']
})
export class PromiseVsObservableComponent implements OnInit, OnDestroy {

  private mySubscription: Subscription = new Subscription();
  private counter: number = 0;

  constructor() { }

  ngOnInit(): void {
    const promise = new Promise(resolve => {
      console.log('Inside Promise...');
      setTimeout(() => {
        resolve('Promise working');
        resolve('Promise working1');
        resolve('Promise working2');
        resolve('Promise working3');
      }, 1000);
    });
    promise.then(result => console.log(result));

    const observable = new Observable(sub => {
      console.log('Inside Observable...');
      setInterval(() => {
        this.counter += 1;
        console.log(this.counter);
      }, 1000);
    });

    this.mySubscription = observable
              .subscribe(result => console.log('Subscriber count: ' + result));
  }
  // Stop doing undo
  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }
}
