import { Component } from '@angular/core';
import { ItemsHabilidades } from './models/itens-habilidades';
import { NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.scss'
})
export class HabilidadesComponent {
  public itemsHabilidades: ItemsHabilidades[] =
  [
    {
      icone: "bi-window-fullscreen",
      titulo: "Web Design",
      descricao: 'Design e desenvolvimento de sistemas WEB atraentes e responsivos.'
    },

    {
      icone: "bi-server",
      titulo: "Aplicações Back-End",
      descricao: 'Desenvolvimento de sistemas robustos para solucionar problemas simples e complexos.'
    },

    {
      icone: "bi-graph-up",
      titulo: "Testes Automatizados",
      descricao: 'Criação de testes automatizados que facilitam a manutenção e melhoram as entregas das aplicações.'
    },

    {
      icone: "bi-wrench",
      titulo: "Engenharia de Software",
      descricao: 'Planejamento e execução de sistemas multicamadas, integração de várias tecnologias de forma organizada e escalável.'
    },

    {
      icone: "bi bi-people",
      titulo: "Liderança",
      descricao: 'Habilidade de liderar e tomar decisões técnicas em projetos em equipe.'
    },

    {
      icone: "bi-building-up",
      titulo: "Implantação",
      descricao: 'Implantação e manutenção de sistemas em servidores VPS e em nuvem.'
    }
  ]
}