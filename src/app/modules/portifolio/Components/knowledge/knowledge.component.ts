import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
public arrayKnowledge = signal<IKnowledge[]>([
  {
    src: 'assets/icons/html5.svg',
    alt: 'Ícone de conhecimento de HTML5', 
    title: 'HTML5'
  },
  {
    src: 'assets/icons/css3.svg',
    alt: 'Ícone de conhecimento de CSS3',
    title: 'CSS3' 
  },
  {
    src: 'assets/icons/javascript.svg',
    alt: 'Ícone de conhecimento de JavaScript' ,
    title: 'JavaScript'
  },
  {
    src: 'assets/icons/angular.svg',
    alt: 'Ícone de conhecimento de Angular' ,
    title: 'Angular' 
  },
  {
    src: 'assets/icons/dotnet.svg',
    alt: 'Ícone de conhecimento de DotNet' ,
    title: '.NET'
  },
  {
  src: 'assets/icons/csharp.svg',
  alt: 'Ícone de conhecimento de charp' ,
  title: 'C#'
  },
  {
    src: 'assets/icons/python.svg',
    alt: 'Ícone de conhecimento de Python' ,
    title: 'Python'
  },
]);

}
