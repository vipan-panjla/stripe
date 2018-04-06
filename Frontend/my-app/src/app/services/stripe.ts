import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class stripeService {

  constructor(private http : Http) { 
  }

  makeStripePayment(token,amount): Observable<any>
  {
  return this.http
  .post('http://localhost:3000/stripe',{token: token,amount:amount})
  .map(data => {
    console.log(data);
    return data;
  });
};

}