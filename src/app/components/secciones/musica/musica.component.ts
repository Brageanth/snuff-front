import { Component, OnInit } from '@angular/core';
import { EstampadoService } from 'src/app/services/estampado.service';
import { Estampado } from 'src/app/models/estampado';
import { AppComponent } from 'src/app/app.component';

const MUSICA = 'Musica';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit {

  estampadosMusica: Array<Estampado>;
  cargo = false;

  constructor(
    private estampadoService: EstampadoService,
    private appComponent: AppComponent
  ) { }

  async ngOnInit() {
    const res = <Estampado[]> await this.estampadoService.getEstampado();
    for (const estampado of res) {
      if (estampado.categoria === MUSICA) {
        this.estampadosMusica.push(estampado);
      }
    }
    this.appComponent.typeNav(true);
    this.cargo = true;
  }

}
