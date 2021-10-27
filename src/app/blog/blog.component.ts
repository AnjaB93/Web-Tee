import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';
import { ScullyRoute } from '@scullyio/ng-lib';
import { HomeComponent } from 'src/app/home/home.component';
declare var ng: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class BlogComponent implements OnInit {
  @Input() page: ScullyRoute | undefined;
  ngOnInit() {}

  constructor(private router: Router, private route: ActivatedRoute) {}
}
