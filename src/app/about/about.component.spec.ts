import { ComponentFixture, } from '@angular/core/testing';
import { AboutComponent } from './about.component';



import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './about.component.html',
  styleUrls: ['./abour.component.scss'],
})
export class AboutComponent implements AfterViewInit{
  ngAfterViewInit() {
    const videoTwo = GLightbox({
      selector: ".glightbox",
      type: "video",
      source: "youtube", //vimeo, youtube or local
      width: 900,
      autoplayVideos: true,
    });
  }
}
