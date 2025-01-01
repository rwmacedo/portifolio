import { Component } from '@angular/core';
import { HeaderComponent } from '../../Components/header/header.component';
import { KnowledgeComponent } from '../../Components/knowledge/knowledge.component';
import { ExperiencesComponent } from '../../Components/experiences/experiences.component';
import { ProjectsComponent } from '../../Components/projects/projects.component';
import { FooterComponent } from "../../Components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, KnowledgeComponent, ExperiencesComponent, ProjectsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
