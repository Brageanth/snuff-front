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
  video = true;
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
    for (const estampado of res) {
      if (estampado.categoria === MUSICA) {
        this.estampadosMusica.push(estampado);
        this.meta.addTags([
          { name: 'og:title', content: estampado.nombre },
          { name: 'og:image', content: estampado.imagenGaleria0 }
        ]);
      }
    }
    this.appComponent.typeNav(true);
    this.meta.addTags([
      { name: 'og:url', content: 'https://pruebasbrageanth.pythonanywhere.com'+this.url },
      { name: 'og:type', content: 'website' }
    ]);
    this.cargo = true;
  }

  imagenActive(pEstampado: Estampado) {
    this.estampadoActive = pEstampado;
    this.meta.updateTag({ name: 'og:title', content: pEstampado.nombre });
    this.meta.updateTag({ name: 'og:image', content: 'https://pruebasbrageanth.pythonanywhere.com'+pEstampado.imagenGaleria0 });
  }

  playAudio() {
    this.audio.src = 'https://pruebasbrageanth.pythonanywhere.com' + this.estampadoActive.cancion;
    this.audio.load();
    this.audio.play();
    this.audioPlay = true;
  }

  pauseAudio() {
    this.audio.pause();
    this.audioPlay = false;
  }
}
