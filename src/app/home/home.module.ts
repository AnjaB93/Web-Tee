import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BlogCardComponent } from '../components/blog-card/blog-card.component';

@NgModule({
  declarations: [HomeComponent, BlogCardComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
