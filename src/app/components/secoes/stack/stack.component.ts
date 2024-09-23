import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { ItemStack } from './models/item-stacks';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.scss'
})
export class StackComponent {
  public itensStack: ItemStack[] =
  [
    {titulo: ".NET"},
    {titulo: "Angular"},
    {titulo: "TypeScript"},
    {titulo: "Node.js"},
    {titulo: "Discord.js"},
    {titulo: "Firebase"},
    {titulo: "Entity Framework"},
    {titulo: "Microsoft SQL Server"},
    {titulo: "Selenium"},
    {titulo: "Cypress"}
  ] 
}
