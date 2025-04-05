import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardProjectsComponent } from "./components/card-projects/card-projects.component";
import { dataProjects } from './data/data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'portfolio_angular';
  listaProyectos: any[] = []

  ngOnInit(): void {
    this.listaProyectos = dataProjects
  }
}