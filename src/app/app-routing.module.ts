import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsletterSignUpComponent } from './components/newsletter-sign-up/newsletter-sign-up.component';

const routes: Routes = [
  { path: '', component: NewsletterSignUpComponent },
  { path: 'sign-up', component: NewsletterSignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
