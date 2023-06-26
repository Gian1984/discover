import { Component } from '@angular/core';

@Component({
  selector: 'app-skillup',
  templateUrl: './skillup.component.html',
  styleUrls: ['./skillup.component.scss']
})
export class SkillupComponent {
  links = [
    {
      id:1,
      serial:'01',
      icon:' fa-house-signal',
      name: 'Online App',
      desc:'Start with free programming and coding education app. An interactive way to learn & practice programming online. Improve coding skills to advance in your education and career',
    },
    {
      id:2,
      serial:'02',
      icon:'fa-pencil-paintbrush',
      name: 'Boot camps',
      desc:'Boot camps are a way to go from novice to expert in just a few months. They cost several thousand dollars or more and require full-time attendance, but there\'s no better way to ramp up quickly.',
    },
    {
      id:3,
      serial:'03',
      icon:'fa-fire',
      name: 'Podcasts',
      desc:'Sadly, the space here is pretty sparse, but not enough to write it off completely. Only two podcasts are producing regular content and have been around for a while.',
    },
    {
      id:4,
      serial:'04',
      icon:'fa-chart-bar',
      name: 'User Groups',
      desc:'One of the best ways to learn is to associate with others who are just as passionate. Many developers have demonstrated their commitment to learning by spending their free time to improve themselves.',
    },
    {
      id:5,
      serial:'05',
      icon:'fa-film',
      name: 'People',
      desc:'There are many personalities in the industry doing a lot of great work. Finding people you admire who are doing work you\'re interested in and following them is a mark of someone interested in learning.',
    },
    {
      id:6,
      serial:'06',
      icon:'fa-hand-scissors',
      name: 'Stack Overflow',
      desc:'Hands down this is the best place to learn things and get issues solved. In combination with one of the aforementioned online coding tools, you can find a solution for just about any problem here.',
    },
  ]
}
