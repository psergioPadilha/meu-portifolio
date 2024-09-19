import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgClass],
  templateUrl: "app.component.html",
  styleUrl: "app.component.scss",
})
export class AppComponent
{
  public colpsarNavbar: boolean = false;
}
