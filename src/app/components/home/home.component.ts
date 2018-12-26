import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { EstampadoService } from 'src/app/services/estampado.service';
import { Estampado } from 'src/app/models/estampado';
import { HomeService } from 'src/app/services/home.service';
import { Campania } from 'src/app/models/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  estampadoList: Array<Estampado> = [];
  estampadoActive: Estampado;
  campania: Campania;

  constructor(private appComponent: AppComponent, private estampadoService: EstampadoService, private homeService: HomeService) { }

  async ngOnInit() {
    await this.appComponent.getToken();
    this.appComponent.typeNav();
    const ress = <any> await this.estampadoService.getEstampado();
    this.campania = <Campania> await this.homeService.getCampania();
    let i = 0;
    for (const estampado of ress) {
      if (estampado.cantidad > 0) {
        this.estampadoList.push(estampado);
        if (i === 0) {
          this.estampadoActive = estampado;
        }
      }
      i++;
    }
  }

  activeSlide(pEstampado: Estampado) {
    if (this.estampadoActive === pEstampado) {
      console.log(true);
      return true;
    }
    return false;
  }
}
