import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-newsletter-list-item',
  templateUrl: './newsletter-list-item.component.html',
  styleUrls: ['./newsletter-list-item.component.scss']
})
export class NewsletterListItemComponent {

  @Input({required: true})
  text!: string;

}
