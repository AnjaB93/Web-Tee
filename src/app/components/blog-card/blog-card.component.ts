import { Component, Input } from '@angular/core';
import { ScullyRoute } from '@scullyio/ng-lib';
import { HomeComponent } from 'src/app/home/home.component';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent {
  //Falsch hier weiter ansetzen
  @Input() page: ScullyRoute | undefined;
}
