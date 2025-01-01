import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog= inject(MatDialog);


  public arrayProjects= signal<IProjects[]>([
    {
      src: 'assets/img/projects/ladanza.jpg',
      alt: '',
      title:'La Danza',
      width:'100px',
      height:'100px',
      description:'Site de ecommerce desenvolvido com wordpress e woocommerce.',
      links:[
        {
          name: 'Conheça a Pagina',
          href: 'https://ladanza.com.br',
        },
      ],
    },
    {
      src: 'assets/img/projects/cafeteria.png',
      alt: '',
      title:'Manhattan Coffee',
      width:'150px',
      height:'100px',
      description:'Um Site de exemplo de uma cafeteria ficticia. ',
      links:[
        {
          name: 'Conheça a Pagina',
          href: 'https://rwmacedo.github.io/Site_Simples_Cafeteria/',
        },
      ],
    },

    {
      src: 'assets/img/projects/petshop.png',
      alt: '',
      title:'Pet Boutique',
      width:'150px',
      height:'100px',
      description:'Site exemplo de um Petshop ficticio.',
      links:[
        {
          name: 'Conheça a Pagina',
          href: 'https://rwmacedo.github.io/Site-Siples-Pet-Shop/',
        },
      ],
    },
   
  ]);
  public getData(): IProjects | undefined {
    return this.arrayProjects()[0]; 
  }


  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    });
  }
/*
  public closeDialog(){
    this.#dialog.closeAll();
  }
*/

}
