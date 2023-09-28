import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterSignUpComponent } from './newsletter-sign-up.component';

describe('NewsletterSignUpComponent', () => {
  let component: NewsletterSignUpComponent;
  let fixture: ComponentFixture<NewsletterSignUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsletterSignUpComponent]
    });
    fixture = TestBed.createComponent(NewsletterSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
