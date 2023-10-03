import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newsletter-sign-up',
  templateUrl: './newsletter-sign-up.component.html',
  styleUrls: ['./newsletter-sign-up.component.scss']
})
export class NewsletterSignUpComponent {

  constructor(private router: Router) { }

  emailAddress = new FormControl('', [Validators.required, Validators.email]);

  subscribe() {
    if (this.emailAddress.valid) {
      this.router.navigate(['/sign-up-success/' + this.emailAddress.value]);
    } else {
      this.emailAddress.markAsDirty();
    }
  }
}
