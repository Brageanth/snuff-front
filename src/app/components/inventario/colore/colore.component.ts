import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Prenda } from '../../../models/prenda';
import { Colore } from '../../../models/colore';
import { ColoreService } from 'src/app/services/colore.service';

@Component({
  selector: 'app-colore',
  templateUrl: './colore.component.html',
  styleUrls: ['./colore.component.css']
})
export class ColoreComponent implements OnInit {

  @Input() prenda: Prenda;
  colorList: Array<Colore> = [];
  colorActive: Colore;
  altoCuadro: number;
  @Output() color: EventEmitter<any> = new EventEmitter();
  cargo = false;

  constructor(private colorService: ColoreService) { }

  async ngOnInit() {
    const ress = <any> await this.colorService.getColor();
    let i = 0;
    for (const color of ress) {
      if (color.cantidad > 0) {
        if (color.prenda === this.prenda.id) {
          this.colorList.push(color);
          if (i === 0) {
            this.colorActive = color;
          }
          i++;
        }
      }
    }
    this.altoCuadro = (65 - this.colorList.length) / this.colorList.length;
    this.cargo = true;
  }

  activeSlide(pColor: Colore) {
    this.colorActive = pColor;
  }

  guardarColor() {
    this.color.emit(this.colorActive);
  }
}
