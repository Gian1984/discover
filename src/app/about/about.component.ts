declare const GLightbox: any;
import { Component, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements AfterViewInit{
  lightbox:any;
  ngAfterViewInit(): void {
    this.lightbox = GLightbox({
      selector: ".glightbox",
      type: "video",
      source: "youtube", //vimeo, youtube or local
      width: 900,
      autoplayVideos: true,
    });
  }
}
