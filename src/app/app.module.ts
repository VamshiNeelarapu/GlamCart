import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestimonialcomponentComponent } from './testimonialcomponent/testimonialcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    TestimonialcomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
