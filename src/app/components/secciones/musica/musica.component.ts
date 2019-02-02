import { Component, OnInit } from '@angular/core';
import { EstampadoService } from 'src/app/services/estampado.service';
import { Estampado } from 'src/app/models/estampado';

const MUSICA = 'Musica';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit {

  estampadosMusica: Array<Estampado>;

  constructor(
    private estampadoService: EstampadoService
  ) { }

  async ngOnInit() {
    const res = <Estampado[]> await this.estampadoService.getEstampado();
    for (const estampado of res) {
      if (estampado.categoria === MUSICA) {
        this.estampadosMusica.push(estampado);
      }
    }
  }

}
