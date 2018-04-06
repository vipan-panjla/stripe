import { Component } from '@angular/core';
 import { stripeService } from './services/stripe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isSubmitting = false;
  token: string = null;
  message: string = '';

  constructor(
   
     private stripeservice: stripeService,
  ) {}

  openCheckout() {
    this.isSubmitting = true;
    // this.errors = new Errors();       // removing error message
    var amount = 8000;
    var handler = (<any>window).StripeCheckout.configure({
      key: "pk_test_kG6OAc4rCCfiFgx8M06HZ4WG",   // client account
      locale: 'auto',
      token: token => {
        this.makePayment(token,amount);
        this.token = token;
        console.log(this.token);
      }
    });
    handler.open({
      name: 'Jive',
      description: 'Pay to Jive',
      amount: amount,
      email: "abc@gmail.com",
      closed: closed => { 
        if(!this.token)
        {
          console.log(this.token)
        this.isSubmitting = false 
        }
      } 
    });
  }

  makePayment(token: any,amount:any)
  {
    debugger;
    this.stripeservice.makeStripePayment(token,amount)
    .subscribe(
      data => {
        this.message = data._body;
        this.isSubmitting = false;
        setTimeout(() => {
          this.message = '';
        }, 5000)     
      },
      err => {
        this.isSubmitting = false;
        this.message = "something went wrong Please try again later";
        setTimeout(() => {
          this.message = '';
        }, 5000)  
      }
    );
  }
  }
