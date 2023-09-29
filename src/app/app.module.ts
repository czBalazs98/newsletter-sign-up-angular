import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewsletterSignUpComponent } from './components/newsletter-sign-up/newsletter-sign-up.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsletterListItemComponent } from './components/newsletter-list-item/newsletter-list-item.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NewsletterSignUpComponent,
    FooterComponent,
    NewsletterListItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
