import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewsletterSignUpComponent } from './components/newsletter-sign-up/newsletter-sign-up.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsletterListItemComponent } from './newsletter-list-item/newsletter-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsletterSignUpComponent,
    FooterComponent,
    NewsletterListItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
