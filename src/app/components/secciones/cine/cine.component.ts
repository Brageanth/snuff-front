import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { EstampadoService } from 'src/app/services/estampado.service';
import { Estampado } from 'src/app/models/estampado';


const CINE = 'CS';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent implements OnInit {

  cargo: boolean;
  estampadosCine: Array<Estampado> = [];
  imagenesActivas: Array<String>;
  imagenesGaleria: Array<Array<String>>;
  video: boolean;

  constructor(
    private appComponent: AppComponent,
    private estampadoService: EstampadoService
  ) { }

  async ngOnInit() {
    this.cargo = true;
    this.appComponent.typeNav(this.cargo);
    this.imagenesActivas = [];
    this.imagenesGaleria = [];
    this.video = true;

    const est = <Estampado[]> await this.estampadoService.getEstampado();
    for (const estampado of est) {
      if (estampado.categoria === CINE) {
        this.estampadosCine.push(estampado);
        this.estampadoGaleria(estampado);
      }
    }
  }

  estampadoGaleria(pEstampado: Estampado) {
    const imagenes: Array<String> = [];
    for (let i = 0; i < 7; i++) {
      imagenes.push(pEstampado['imagenGaleria' + i]);
    }
    this.imagenesGaleria.push(imagenes);
  }
  
  imagenActive(pEstampado: Estampado, imagen: string, numero: number) {
    this.imagenesActivas[numero] = imagen;
    this.video = false;
  }
}
