import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { EstampadoService } from 'src/app/services/estampado.service';
import { Estampado } from 'src/app/models/estampado';
import { HomeService } from 'src/app/services/home.service';
import { Campania, Empresa } from 'src/app/models/home';
import * as THREE from 'three-full';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  estampadoList: Array<Estampado> = [];
  estampadoActive: Estampado;
  campaniaList: Campania;
  empresaList: Empresa;
  estampadoBack: Estampado;
  @ViewChild('imgBack') imgBack: ElementRef;
  imgLarge = false;
  imgWidth = false;
  cargo = false;
  @ViewChild('containerCamisa') containerCamisa: ElementRef;

  constructor(private appComponent: AppComponent, private estampadoService: EstampadoService, private homeService: HomeService) { }

  async ngOnInit() {
    const ress = <any> await this.estampadoService.getEstampado();
    this.empresaList = <Empresa> await this.homeService.getEmpresa();
    this.campaniaList = <Campania> await this.homeService.getCampania();
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
    this.estampadoBack = this.estampadoList[Math.floor(Math.random() * this.estampadoList.length)];
    console.log(this.empresaList);
    this.cargo = true;
    this.appComponent.typeNav(this.cargo);
    this.importCamiseta();
  }

  activeSlide(pEstampado: Estampado) {
    if (this.estampadoActive === pEstampado) {
      return true;
    }
    return false;
  }

  imgSize() {
    if ((this.imgBack.nativeElement as HTMLImageElement).width > (this.imgBack.nativeElement as HTMLImageElement).height) {
      this.imgWidth = true;
    } else {
      this.imgLarge = true;
    }
  }

  importCamiseta() {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

		let renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    //this.containerCamisa.nativeElement.appendChild( renderer.domElement );
    document.body.appendChild(renderer.domElement);

		let geometry = new THREE.BoxGeometry( 1, 1, 1 );
		let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		let cube = new THREE.Mesh( geometry, material );
		scene.add( cube );

		camera.position.z = 5;

		let animate = function () {
			requestAnimationFrame( animate );

			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;

			renderer.render( scene, camera );
		};

		animate();
  }
}
