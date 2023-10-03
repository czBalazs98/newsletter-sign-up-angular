import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newsletter-sign-up-success',
  templateUrl: './newsletter-sign-up-success.component.html',
  styleUrls: ['./newsletter-sign-up-success.component.scss']
})
export class NewsletterSignUpSuccessComponent {

  @Input()
  emailAddress!: string;

  constructor(private router: Router) {
  }

  redirectToSignUp() {
    this.router.navigate(['/sign-up']);
  }

}
