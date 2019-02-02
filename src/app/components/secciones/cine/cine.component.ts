import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { EstampadoService } from 'src/app/services/estampado.service';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent implements OnInit {

  cargo: boolean;

  constructor(
    private appComponent: AppComponent,
    private estampadoService: EstampadoService
  ) { }

  async ngOnInit() {
    this.cargo = true;
    this.appComponent.typeNav(this.cargo);

    const est = <any> await this.estampadoService.getEstampado();
    for (const estampado of est) {
      if (estampado.categoria === 'cine' ) {
      }
    }
  }
}
