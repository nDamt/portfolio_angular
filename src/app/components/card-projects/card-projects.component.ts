import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-projects',
  standalone: true,
  imports: [],
  templateUrl: './card-projects.component.html',
  styleUrl: './card-projects.component.css'
})
export class CardProjectsComponent {
  @Input() proyecto: any = {
    nombreProyecto: "",
    descripcionProyecto: "",
    urlProyecto: "",
    urlImagen:"",
    urlGithub:""
  }
  /*
  nombreProyecto: string = "";
  descripcionProyecto: string = "";
  urlProyecto: string = "";
  urlImagen: string = "";
  urlGitHub: string = "";
  */
}
