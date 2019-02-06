import { Component, OnInit } from '@angular/core';
import { Estampado } from 'src/app/models/estampado';
import { EstampadoService } from 'src/app/services/estampado.service';

const ARTE = "A";

@Component({
  selector: 'app-pintura',
  templateUrl: './pintura.component.html',
  styleUrls: ['./pintura.component.css']
})
export class PinturaComponent implements OnInit {

  estampadosArte: Array<Estampado>;
  imagenesActivas: Array<String>;
  primerasLineas: Array<String>;
  segundasLineas: Array<String>;
  cargo: boolean;
  video: boolean;

  constructor(
    private estampadoService: EstampadoService
  ) { }

  ngOnInit() {
    this.cargo = false;
    this.video = false;
    this.estampadosArte = [];
    this.imagenesActivas = [];
    this.primerasLineas = [];
    this.segundasLineas = [];
    this.getEstampadosPintura();
    this.video = true;
    this.cargo = true;
  }

  async getEstampadosPintura() {
    const res = <Estampado[]> await this.estampadoService.getEstampado();
    let i = 0;
    for (const estampado of res) {
      if (estampado.categoria === ARTE) {
        this.estampadosArte.push(estampado);
        this.imagenesActivas.push("");
        this.primerasLineas.push("");
        this.segundasLineas.push("");
        this.splitNombre(estampado.nombre, i);
        i++;
      }
    }
  }

  splitNombre(pNombre: String, i: number) {
    let largo = pNombre.length / 2;
    let palabras = pNombre.split(" ");
    console.log(largo);
    console.log(palabras);
    
    for (const palabra of palabras) {
      if (palabra.length <= largo) {
        this.primerasLineas[i] += (palabra + ' ');
        largo -= (palabra.length + 1);
      } else if (palabra.length > largo) {
        if ((palabra.length / 2) <= largo) {
          this.primerasLineas[i] += (palabra);
        } else {
          this.segundasLineas[i] += (palabra + ' ');
        }
      } else if (largo <= 0) {
        this.segundasLineas[i] += (palabra + ' ');
      }
    }
  }
}
