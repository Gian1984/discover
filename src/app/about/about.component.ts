import { Component } from '@angular/core';


@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    standalone: false
})

export class AboutComponent {

  projects = [
    {
      id: 1,
      img: '../../assets/image/codehelper_logo.webp',
      name: 'CodeHelper.me',
      desc: 'Developer tools, curated resources and public APIs for developers',
      url: 'https://codehelper.me/',
    },
    {
      id: 2,
      img: '../../assets/image/undiscoverme.png',
      name: 'Undiscover.me',
      desc: 'Make sure your new website shows the best of you',
      url: 'https://www.undiscover.me/',
    },
    {
      id: 3,
      img: '../../assets/image/unlistened_logo.webp',
      name: 'Unlistened.me',
      desc: 'Latest podcasts experience',
      url: 'https://www.unlistened.me/',
    },
    {
      id: 4,
      img: '../../assets/image/logo_fava_border.a89ac8fa.png',
      name: 'Claudio Fava',
      desc: 'Architect',
      url: 'https://www.favaclaudio.com/',
    },
    {
      id: 5,
      img: '../../assets/image/theNationalVenue_logo.webp',
      name: 'The National Venue Brussels',
      desc: 'The exclusive event address at the gates of Brussels',
      url: 'https://www.thenationalvenuebrussels.com/',
    },
    {
      id: 6,
      img: '../../assets/image/artfood_logo.webp',
      name: 'Artfood',
      desc: 'Refined catering experiences crafted with authenticity and balance',
      url: 'https://www.artfood.be/',
    },
    {
      id: 7,
      img: '../../assets/image/mancala_logo.webp',
      name: 'Mancala Travel',
      desc: 'French-speaking travel specialists for tailor-made trips across Southern Africa',
      url: 'https://www.mancalatravel.com/',
    },
    {
      id: 8,
      img: '../../assets/image/brusano_logo_350px.de276e6e.png',
      name: 'Brusano',
      desc: 'Brussels palliative care platform',
      url: 'https://www.brusano.brussels/',
    },
    {
      id: 9,
      img: '../../assets/image/pizza-vino-logo.e5ef6a69.png',
      name: 'Pizza Vino',
      desc: 'Best pizza in BXL',
      url: 'https://pizzavino.be/',
    },
    {
      id: 10,
      img: '../../assets/image/panoptes.06203a59.png',
      name: 'Panoptes',
      desc: 'Art collection',
      url: 'https://www.panoptes.art/',
    },
    {
      id: 11,
      img: '../../assets/image/lavilla.f7cb1b5b.png',
      name: 'La Villa In The Sky',
      desc: 'High-flying fine dining experience in Brussels',
      url: 'https://www.lavillainthesky.be/',
    },
    {
      id: 12,
      img: '../../assets/image/quendra.7a17d18d.png',
      name: 'Quendra',
      desc: 'European telecom consulting company',
      url: 'https://www.quendra.com/',
    },
    {
      id: 13,
      img: '../../assets/image/districare_logo.webp',
      name: 'DistriCare Pharma SRL',
      desc: 'Belgian group at the service of health',
      url: 'https://www.districare.be/',
    },
    {
      id: 14,
      img: '../../assets/image/unik.f4c65f45.png',
      name: 'Unikpools',
      desc: 'Exclusive swimming pool',
      url: 'https://www.unikpools.com/',
    },
    {
      id: 15,
      img: '../../assets/image/colonel_logo.webp',
      name: 'Colonel Gustave',
      desc: 'Healthy and natural food for dogs and cats',
      url: 'https://www.colonelgustave.com/',
    },
    {
      id: 16,
      img: '../../assets/image/artigiano_logo.webp',
      name: "L'Artigiano della farina",
      desc: 'Artisan bread and pizza maker',
      url: 'https://www.artigianodellafarina.be/',
    },
  ]

}





