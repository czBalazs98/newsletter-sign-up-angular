import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { NewsletterSignUpComponent } from './components/newsletter-sign-up/newsletter-sign-up.component';
import { NewsletterSignUpSuccessComponent } from './components/newsletter-sign-up-success/newsletter-sign-up-success.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-up', pathMatch: 'full' },
  { path: 'sign-up', component: NewsletterSignUpComponent },
  { path: 'sign-up-success/:emailAddress', component: NewsletterSignUpSuccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes, withComponentInputBinding())]
})
export class AppRoutingModule {}
