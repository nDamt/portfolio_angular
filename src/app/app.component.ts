import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardProjectsComponent } from "./components/card-projects/card-projects.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio_angular';
}