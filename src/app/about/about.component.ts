declare const GLightbox: any;
import { Component, AfterViewInit} from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements AfterViewInit{

  projects = [
    {
      id:1,
      fil:'branding',
      img:'https://cdn.ayroui.com/1.0/images/portfolio/portfolio-3/pf1.jpg',
      name: 'Nishant',
      desc:'Lorem ipsum',
      url:'https://cdn.ayroui.com/1.0/images/portfolio/portfolio-3/pf1.jpg',

    },
    {
      id:2,
      fil:'research',
      img:'https://cdn.ayroui.com/1.0/images/portfolio/portfolio-3/pf1.jpg',
      name: 'Nishant',
      desc:'Lorem ipsum',
      url:'https://cdn.ayroui.com/1.0/images/portfolio/portfolio-3/pf1.jpg',
    },
    {
      id:3,
      fil:'marketing',
      img:'https://cdn.ayroui.com/1.0/images/portfolio/portfolio-3/pf1.jpg',
      name: 'Nishant',
      desc:'Lorem ipsum',
      url:'https://cdn.ayroui.com/1.0/images/portfolio/portfolio-3/pf1.jpg',
    },
    {
      id:4,
      fil:'planning',
      img:'https://cdn.ayroui.com/1.0/images/portfolio/portfolio-3/pf1.jpg',
      name: 'Nishant',
      desc:'Lorem ipsum',
      url:'https://cdn.ayroui.com/1.0/images/portfolio/portfolio-3/pf1.jpg',
    },
    {
      id:5,
      fil:'planning',
      img:'https://cdn.ayroui.com/1.0/images/portfolio/portfolio-3/pf1.jpg',
      name: 'Nishant',
      desc:'Lorem ipsum',
      url:'https://cdn.ayroui.com/1.0/images/portfolio/portfolio-3/pf1.jpg',
    },
    {
      id:6,
      fil:'research',
      img:'https://cdn.ayroui.com/1.0/images/portfolio/portfolio-3/pf1.jpg',
      name: 'Nishant',
      desc:'Lorem ipsum',
      url:'https://cdn.ayroui.com/1.0/images/portfolio/portfolio-3/pf1.jpg',
    },
    {
      id:7,
      fil:'branding',
      img:'https://cdn.ayroui.com/1.0/images/portfolio/portfolio-3/pf1.jpg',
      name: 'Nishant',
      desc:'Lorem ipsum',
      url:'https://cdn.ayroui.com/1.0/images/portfolio/portfolio-3/pf1.jpg',
    },
    {
      id:8,
      fil:'research',
      img:'https://cdn.ayroui.com/1.0/images/portfolio/portfolio-3/pf1.jpg',
      name: 'Nishant',
      desc:'Lorem ipsum',
      url:'https://cdn.ayroui.com/1.0/images/portfolio/portfolio-3/pf1.jpg',
    },
  ]

  lightbox:any;
  ngAfterViewInit(): void {
    this.lightbox = GLightbox({
      selector: ".glightbox",
      type: "video",
      source: "youtube", //vimeo, youtube or local
      width: 900,
      autoplayVideos: true,
    });

    this.lightbox = GLightbox({
      selector: ".glightbox3",
      type: "image",
      width: 900,
    });

    const filters: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".portfolio-menu button");

    filters.forEach((filter: HTMLButtonElement) => {
      filter.addEventListener("click", function (): void {
        // ==== Filter btn toggle
        let filterBtn: Node | null = filters[0];
        while (filterBtn) {
          if ( filterBtn.nodeName === "BUTTON") {
            (filterBtn as HTMLButtonElement).classList.remove("active");
          }
          filterBtn = filterBtn.nextSibling;
        }
        this.classList.add("active");

        // === filter
        let selectedFilter: string | null = filter.getAttribute("data-filter");
        let itemsToHide: NodeListOf<Element> = document.querySelectorAll(
          `.grid .col-lg-4:not([data-filter='${selectedFilter}'])`
        );
        let itemsToShow: NodeListOf<Element> = document.querySelectorAll(
          `.grid [data-filter='${selectedFilter}']`
        );

        if (selectedFilter == "all") {
          itemsToHide = document.querySelectorAll('.grid .col-lg-4');
          itemsToShow = document.querySelectorAll(".grid [data-filter]");
        }

        itemsToHide.forEach((el: Element) => {
          el.classList.add("hide");
          el.classList.remove("show");
        });

        itemsToShow.forEach((el: Element) => {
          el.classList.remove("hide");
          el.classList.add("show");
        });
      });
    });

  }
}





