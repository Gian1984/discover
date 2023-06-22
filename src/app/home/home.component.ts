import { Component, AfterViewInit } from '@angular/core';
import {tns}  from 'tiny-slider/src/tiny-slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit{
  ngAfterViewInit() {
    const slider = tns({
      container: '#slider',
      items: 5,
      slideBy: 'page',
      autoplay: true,
      autoplayButtonOutput: false,
      controls: false,
      nav: false,
    });
  }
}
