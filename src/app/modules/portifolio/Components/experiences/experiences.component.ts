import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([

    {
      summary: {
        strong:"Front-end",
        p: "Criação de páginas web e e-commerces",
      },
      text: "<p>  Com sólida experiência em desenvolvimento front-end, participei da criação de projetos como o e-commerce La Danza e o blog OeAutoimunes. Meu trabalho envolve criar interfaces elegantes e responsivas, garantindo uma excelente experiência do usuário.",
    },
    {
      summary: {
        strong:"Full-stack",
        p: "Desenvolvimento utilizando .NET e Angular",
      },
      text: "<p> Atualmente trabalho em uma grande organização como desenvolvedor full-stack, no desenvolvimento e manutenção de projetos. Minha atuação inclui o desenvolvimento de APIs REST com .NET e a criação de interfaces dinâmicas e interativas com Angular.",
    },
    {
    summary: {
      strong:"Ciência de dados",
      p: "Aplicação de ciência de dados com Python",
    },
    text: "<p> Mestre em Economia e Finanças pela Fundação Getulio Vargas (FGV), na linha de pesquisa em ciência de dados. Durante o mestrado (obtido em 2024), desenvolvi projetos que integraram técnicas de machine learning, análise estatística e visualização de dados para solucionar problemas complexos.",
  },
  ]);

}
