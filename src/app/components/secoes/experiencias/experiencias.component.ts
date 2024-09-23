import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { ItemExperiencia } from './models/item-experiencias';

@Component({
  selector: 'app-experiencias',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './experiencias.component.html',
  styleUrl: './experiencias.component.scss'
})

export class ExperienciasComponent
{
  public itensExperiencias: ItemExperiencia[] =
  [
    {
      periodo: "Ago/2021 - Atualmente",
      cargo: "Operador de Câmara Frigorífica",
      descricao: 'Responsável pelo monitoramento e manutenção em equipamentos indústriais de refigeração' +
                  'e controle de gases em câmaras frigoríficas de "Atmosfera Controlada" que armazenam frutas' +
                  'por um longo período de tempo.'
    }
  ]
}
