import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardProjectsComponent } from "./components/card-projects/card-projects.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio_angular';
}

let menuIcon = document.querySelector("#menu-icon") as HTMLElement;
let navbar = document.querySelector(".navbar");
let overlay = document.createElement("div");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
overlay.className = "overlay";
document.body.appendChild(overlay);

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        const activeLink = document.querySelector("header nav a[href*=" + id + "]");
        if (activeLink) {
          activeLink.classList.add("active");
        }
      });
    }
  });
};

if (menuIcon && navbar) {
  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  };

  // Cerrar menú al hacer clic en la pantalla
  overlay.onclick = () => {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  };

  document.querySelectorAll(".navbar a").forEach((link) => {
    (link as HTMLElement).onclick = () => {
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
      overlay.classList.remove("active");
    };
  });
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
      const nameElement = document.getElementById("name");
      if (nameElement) {
        nameElement.classList.add("fade-out");
      }
  }, 300); // Desaparece Daniel Medina en 1s

  setTimeout(function () {
      const portfolioElement = document.getElementById("portfolio");
      if (portfolioElement) {
        portfolioElement.classList.add("fade-out");
      }
  }, 500); // Desaparece Portfolio en 2s después

  setTimeout(function () {
      const preloaderElement = document.getElementById("preloader");
      if (preloaderElement) {
        preloaderElement.classList.add("fade-out");
      }
  }, 2500); // Desaparece el fondo negro en 2s después
});





