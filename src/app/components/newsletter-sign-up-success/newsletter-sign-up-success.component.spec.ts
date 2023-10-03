import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterSignUpSuccessComponent } from './newsletter-sign-up-success.component';

describe('NewsletterSignUpSuccessComponent', () => {
  let component: NewsletterSignUpSuccessComponent;
  let fixture: ComponentFixture<NewsletterSignUpSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsletterSignUpSuccessComponent]
    });
    fixture = TestBed.createComponent(NewsletterSignUpSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
