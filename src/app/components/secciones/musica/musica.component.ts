import { Component, OnInit } from '@angular/core';
import { EstampadoService } from 'src/app/services/estampado.service';
import { Estampado } from 'src/app/models/estampado';
import { AppComponent } from 'src/app/app.component';

const MUSICA = 'M';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit {

  audio = new Audio();
  estampadosMusica: Array<Estampado> = [];
  cargo = false;
  imagen: string;
  audioPlay = false;

  constructor(
    private estampadoService: EstampadoService,
    private appComponent: AppComponent
  ) { }

  async ngOnInit() {
    const res = <Estampado[]> await this.estampadoService.getEstampado();
    let i = 0;
    for (const estampado of res) {
      if (estampado.categoria === MUSICA) {
        this.estampadosMusica.push(estampado);
        if (i === 0){
          this.imagenActive(estampado.imagenGaleria0);
        }
        i++;
      }
    }
    this.appComponent.typeNav(true);
    this.cargo = true;
  }

  imagenActive(pImagen: string) {
    this.imagen = pImagen;
  }

  playAudio(pEstampado: Estampado){
    this.audio.src = "https://pruebasbrageanth.pythonanywhere.com"+pEstampado.cancion;
    this.audio.load();
    this.audio.play();
    this.audioPlay = true;
  }

  pauseAudio() {
    this.audio.pause()
    this.audioPlay = false;
  }
}
