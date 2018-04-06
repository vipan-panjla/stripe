import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { stripeService } from './services/stripe';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [stripeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
