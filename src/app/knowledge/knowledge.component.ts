import { Component } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent {

  links = [
    {
      id:1,
      serial:'01',
      icon:' fa-house-signal',
      name: 'Public APIs',
      desc:'Looking for one that fits your needs can be incredibly time-consuming. Here A collective list of free APIs for use in software and web development.',
      url:'https://letudev.com/publicapis',
    },
    {
      id:2,
      serial:'02',
      icon:'fa-pencil-paintbrush',
      name: 'UI Graphics',
      desc:'Websites and resources with modern UI components in different formats such as PSD, Sketch, Figma, etc. They are great for ideas for web components/UI.',
      url:'https://letudev.com/uigraphics',
    },
    {
      id:3,
      serial:'03',
      icon:'fa-fire',
      name: 'CSS/UI frameworks',
      desc:'CSS/UI frameworks to help build great looking websites and applications such as Tailwind CSS, Bootstrap, Materialize, GatsbyJs Bulma and others.',
      url:'https://letudev.com/cssframeworks',
    },
    {
      id:4,
      serial:'04',
      icon:'fa-chart-bar',
      name: 'Javascript Chart Libraries',
      desc:'Libraries that help developers visualize data into charts such as ChartJS, Chartist, ApexChartsJs, Google Charts, G2Plot, FrappeJS and others.',
      url:'https://letudev.com/cssframeworks',
    },
    {
      id:5,
      serial:'05',
      icon:'fa-film',
      name: 'Stock Videos',
      desc:'List of websites that offer free beautiful stock videos for all kinds of website and apps like Videvo, Pexels, Unsplash, Life of Vids and others. ',
      url:'https://letudev.com/stockvideos',
    },
    {
      id:6,
      serial:'06',
      icon:'fa-hand-scissors',
      name: 'Online Design',
      desc:'All kinds of online tools for design, from photo editors to wireframing, and more like Get Waves, Pixlr, Wireframe.cc, RemoveBG, and others.',
      url:'https://letudev.com/onlinedesigntools',
    },
  ]

}
