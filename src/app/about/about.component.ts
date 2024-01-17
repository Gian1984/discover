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
      fil:'vuelaravel',
      img:'../../assets/image/BELGA-MOBILITY.afde20c7.png',
      name: 'Belga Mobility',
      desc:'Luxury car rental service with a private driver',
      url:'https://belgamobility.com/',

    },
    {
      id:2,
      fil:'vuetailwind',
      img:'../../assets/image/logo_fava_border.a89ac8fa.png',
      name: 'Claudio Fava',
      desc: 'Architect',
      url:'https://www.favaclaudio.com/',
    },
    {
      id:3,
      fil:'vuetailwind',
      img:'../../assets/image/pizza-vino-logo.e5ef6a69.png',
      name: 'Pizza Vino',
      desc:'Best pizza in BXL',
      url:'https://pizzavino.be/',
    },
    {
      id:4,
      fil:'vuetailwind',
      img:'../../assets/image/letu.png',
      name: 'Let You Dev',
      desc:'Platform for rsonal growth in programming',
      url:'https://letudev.com/',
    },
    {
      id:5,
      fil:'wordpress',
      img:'../../assets/image/panoptes.06203a59.png',
      name: 'Panoptès',
      desc:'Art Collection',
      url:'https://www.panoptes.art/',
    },
    {
      id:6,
      fil:'wordpress',
      img:'../../assets/image/lavilla.f7cb1b5b.png',
      name: 'La Villa In The Sky',
      desc:'Expérience culinaire de haute voltige',
      url:'https://www.lavillainthesky.be/',
    },
    {
      id:7,
      fil:'wordpress',
      img:'../../assets/image/quendra.7a17d18d.png',
      name: 'Quendra',
      desc:'European Telecom Consulting Company',
      url:'https://www.quendra.com/',
    },
    {
      id:8,
      fil:'wordpress',
      img:'../../assets/image/odette.360e3adc.png',
      name: 'Odette En Ville',
      desc:'Hotel Restautant',
      url:'https://www.odetteenville.be/',
    },
    {
      id:9,
      fil:'wordpress',
      img:'../../assets/image/unik.f4c65f45.png',
      name: 'Unikpools',
      desc:'Exclusive Swimming Pool',
      url:'https://www.unikpools.com/',
    },
    {
      id:10,
      fil:'wordpress',
      img:'../../assets/image/brusano_logo_350px.de276e6e.png',
      name: 'Brusano',
      desc:'Brussels palliative care platform',
      url:'https://www.brusano.brussels/',
    },
    {
      id:11,
      fil:'wordpress',
      img:'../../assets/image/4ventures-3.11819ae7.png',
      name: '4Venture',
      desc:'Privately-held investment fund',
      url:'https://www.brusano.brussels/',
    },
    {
      id:12,
      fil:'angularbootstrap',
      img:'../../assets/image/undiscoverme.png',
      name: 'Undiscover.ME',
      desc:'Portfolio Web Site',
      url:'https://undiscover.me/',
    },
    {
      id:13,
      fil:'wordpress',
      img:'../../assets/image/logoBIoNew.png',
      name: 'Bioholistic',
      desc:'Natural healthcare for pharmacies',
      url:'https://www.bioholistic.be/',
    },
    {
      id:14,
      fil:'wordpress',
      img:'../../assets/image/didierlogo.jpeg',
      name: 'Didier Engels',
      desc:'Artistic photography',
      url:'https://www.didierengels.be/',
    },
    {
      id:15,
      fil:'wordpress',
      img:'../../assets/image/logodefmunt.png',
      name: 'Munters & Bostanci',
      desc:'Joailliers',
      url:'https://www.muntersbostanci.com/',
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





