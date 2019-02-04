import { Component, OnInit } from '@angular/core';
import { EstampadoService } from 'src/app/services/estampado.service';
import { Estampado } from 'src/app/models/estampado';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';

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
  url: string;
  estampadoActive: Estampado;

  constructor(
    private estampadoService: EstampadoService,
    private appComponent: AppComponent,
    private router: Router,
    private meta: Meta
  ) { }

  async ngOnInit() {
    this.url = this.router.url;
    const res = <Estampado[]> await this.estampadoService.getEstampado();
    let i = 0;
    for (const estampado of res) {
      if (estampado.categoria === MUSICA) {
        this.estampadosMusica.push(estampado);
        if (i === 0) {
          this.imagenActive(estampado);
          this.meta.addTags([
            { name: 'og:title', content: estampado.nombre },
            { name: 'og:image', content: estampado.imagenGaleria0 }
          ]);
        }
        i++;
      }
    }
    this.appComponent.typeNav(true);
    this.meta.addTags([
      { name: 'og:url', content: this.url },
      { name: 'og:type', content: 'website' }
    ]);
    this.cargo = true;
  }

  imagenActive(pEstampado: Estampado) {
    this.estampadoActive = pEstampado;
    this.imagen = pEstampado.imagen;
    this.meta.updateTag({ name: 'og:title', content: pEstampado.nombre });
    this.meta.updateTag({ name: 'og:image', content: pEstampado.imagenGaleria0 });
  }

  playAudio(pEstampado: Estampado) {
    this.audio.src = 'https://pruebasbrageanth.pythonanywhere.com' + pEstampado.cancion;
    this.audio.load();
    this.audio.play();
    this.audioPlay = true;
  }

  pauseAudio() {
    this.audio.pause();
    this.audioPlay = false;
  }
}
