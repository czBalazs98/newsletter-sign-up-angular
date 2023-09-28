import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter-sign-up',
  templateUrl: './newsletter-sign-up.component.html',
  styleUrls: ['./newsletter-sign-up.component.scss']
})
export class NewsletterSignUpComponent {

  emailAddress = new FormControl('', [Validators.required, Validators.email]);

  subscribe() {
    if (this.emailAddress.valid) {
      console.log(this.emailAddress.value);
    }
  }
}
