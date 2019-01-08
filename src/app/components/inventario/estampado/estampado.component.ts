import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Talla } from 'src/app/models/talla';
import { Colore } from 'src/app/models/colore';
import { Prenda } from 'src/app/models/prenda';
import { EstampadoService } from 'src/app/services/estampado.service';
import { Estampado } from 'src/app/models/estampado';

@Component({
  selector: 'app-estampado',
  templateUrl: './estampado.component.html',
  styleUrls: ['./estampado.component.css']
})
export class EstampadoComponent implements OnInit {

  @Input() prenda: Prenda;
  @Input() color: Colore;
  @Input() talla: Talla;
  estampadoList: Array<Estampado> = [];
  estampadoActive: Estampado;
  @Output() estampado: EventEmitter<any> = new EventEmitter();
  cargo = false;

  constructor(private estampadoService: EstampadoService) { }

  async ngOnInit() {

    const ress = <any> await this.estampadoService.getEstampado();
    let i = 0;

    for (const estampado of ress) {
      if (estampado.cantidad > 0) {
        if (estampado.prenda === this.prenda.tipo) {
          if (estampado.stock === true) {
            this.estampadoList.push(estampado);
            if (i === 0) {
              this.estampadoActive = estampado;
            }
          }
        }
      }
      i++;
    }
    this.cargo = true;
  }

  activeSlide(pEstampado: Estampado) {
    this.estampadoActive = pEstampado;
  }

  guardarEstampado() {
    this.estampado.emit(this.estampadoActive);
  }
}
