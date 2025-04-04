import { Component } from '@angular/core';

@Component({
  selector: 'app-card-projects',
  standalone: true,
  imports: [],
  templateUrl: './card-projects.component.html',
  styleUrl: './card-projects.component.css'
})
export class CardProjectsComponent {
  nombreProyecto: string = "Proyecto Daniel";
  descripcionProyecto: string = "Proyecto sencillo de Angular";
  urlProyecto: string = "";
  urlImagen: string = "https://i.pinimg.com/736x/7f/19/9e/7f199ea062f53e08577a0157e3a19c94.jpg";
  urlGitHub: string = "";
}
