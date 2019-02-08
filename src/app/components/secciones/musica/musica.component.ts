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
  imagenesGaleria: Array<Array<String>> = [];
  imagenesActivas: Array<String> = [];

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
        this.meta.updateTag({ property: 'og:title', content: estampado.nombre });
        this.meta.updateTag({ property: 'og:image', content: estampado.imagenGaleria0 });
        this.estampadoGaleria(estampado);
        this.imagenesActivas.push('');
      }
    }
    this.appComponent.typeNav(true);
    this.meta.updateTag({ property: 'og:url', content: 'https://pruebasbrageanth.pythonanywhere.com' + this.url });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.cargo = true;
  }

  imagenActive(pEstampado: Estampado, imagen: string, numero: number) {
    this.imagenesActivas[numero] = imagen;
    this.meta.updateTag({ property: 'og:title', content: pEstampado.nombre });
    this.meta.updateTag({ property: 'og:image', content: 'https://pruebasbrageanth.pythonanywhere.com' + pEstampado.imagenGaleria0 });
    this.video = false;
  }

  playAudio(pEstampado: Estampado) {
    this.audio.src = 'https://pruebasbrageanth.pythonanywhere.com' + pEstampado.cancion;
    this.audio.load();
    this.audio.play();
    this.audioPlay = true;
  }

  pauseAudio(pEstampado: Estampado) {
    this.audio.pause();
    this.audioPlay = false;
  }

  estampadoGaleria(pEstampado: Estampado) {
    const imagenes: Array<String> = [];
    for (let i = 0; i < 7; i++) {
      imagenes.push(pEstampado['imagenGaleria' + i]);
    }
    this.imagenesGaleria.push(imagenes);
  }
}
