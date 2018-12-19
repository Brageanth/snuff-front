import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Colore } from 'src/app/models/colore';
import { Prenda } from 'src/app/models/prenda';
import { Talla } from 'src/app/models/talla';
import { TallaService } from 'src/app/services/talla.service';

@Component({
  selector: 'app-talla',
  templateUrl: './talla.component.html',
  styleUrls: ['./talla.component.css']
})
export class TallaComponent implements OnInit {

  @Input() prenda: Prenda;
  @Input() color: Colore;
  tallaList: Array<Talla> = [];
  imagen: string;
  @Output() talla:EventEmitter<any> = new EventEmitter()

  constructor(private tallaService: TallaService) { }

  async ngOnInit() {
    
    let ress = <any> await this.tallaService.getTalla();
    
    for (let talla of ress){
      if(talla.cantidad>0){
        if(talla.prenda == this.prenda.id){
          if(talla.color == this.color.id){
            this.tallaList.push(talla);
          }
        }
      }
    }
    this.imagen = this.color.imagen;
  }

  guardarTalla(pTalla: Talla){
    this.talla.emit(pTalla);
  }
}
