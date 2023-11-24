
import { Component } from '@angular/core';
import { CatsService } from 'src/app/servicios/cats.service';

@Component({
  selector: 'app-gatos',
  templateUrl: 'gatos.page.html',
  styleUrls: ['gatos.page.scss'],
})
export class GatosPage {
  catImages: any;

  constructor(private catsService: CatsService) {}

  ionViewDidEnter() {
    this.cargarImagenes(); // Llama a esta función al cargar la página inicialmente
  }

  cargarImagenes() {
    this.catsService.getCatsImages().subscribe(data => {
      this.catImages = data;
    });
  }

  cargarNuevasImagenes() {
    // Llama a esta función al hacer clic en el botón "Recargar"
    this.cargarImagenes();
  }
}

