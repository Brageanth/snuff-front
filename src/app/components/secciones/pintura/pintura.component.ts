import { Component, OnInit } from '@angular/core';
import { Estampado } from 'src/app/models/estampado';
import { EstampadoService } from 'src/app/services/estampado.service';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';

const ARTE = 'A';

@Component({
  selector: 'app-pintura',
  templateUrl: './pintura.component.html',
  styleUrls: ['./pintura.component.css']
})
export class PinturaComponent implements OnInit {

  estampadosArte: Array<Estampado>;
  imagenesActivas: Array<String>;
  imagenesGaleria: Array<Array<String>>;
  primerasLineas: Array<String>;
  segundasLineas: Array<String>;
  cargo: boolean;
  video: boolean;
  url: string;

  constructor(
    private estampadoService: EstampadoService,
    private appComponent: AppComponent,
    private router: Router
  ) { }

  async ngOnInit() {
    this.cargo = false;
    this.url = this.router.url;
    this.estampadosArte = [];
    this.imagenesActivas = [];
    this.primerasLineas = [];
    this.segundasLineas = [];
    this.imagenesGaleria = [];
    await this.getEstampadosPintura();
    this.video = true;
    this.appComponent.typeNav(true);
    this.cargo = true;
  }

  async getEstampadosPintura() {
    const res = <Estampado[]> await this.estampadoService.getEstampado();
    let i = 0;
    for (const estampado of res) {
      if (estampado.categoria === ARTE) {
        this.estampadosArte.push(estampado);
        this.imagenesActivas.push('');
        this.primerasLineas.push('');
        this.segundasLineas.push('');
        this.splitNombre(estampado.nombre, i);
        this.estampadoGaleria(estampado);
        i++;
      }
    }
  }

  splitNombre(pNombre: String, i: number) {
    let largo = pNombre.length / 2;
    const palabras = pNombre.split(' ');
    for (const palabra of palabras) {
      if (palabra.length <= largo) {
        this.primerasLineas[i] += (palabra + ' ');
        largo -= (palabra.length + 1);
      } else if (palabra.length > largo) {
        if ((palabra.length / 2) <= largo) {
          this.primerasLineas[i] += palabra;
        } else {
          this.segundasLineas[i] += (palabra + ' ');
        }
      } else if (largo <= 0) {
        this.segundasLineas[i] += (palabra + ' ');
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
