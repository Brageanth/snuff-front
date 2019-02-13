import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { EstampadoService } from 'src/app/services/estampado.service';
import { Estampado } from 'src/app/models/estampado';
import { HomeService } from 'src/app/services/home.service';
import { Campania, Empresa } from 'src/app/models/home';
import * as THREE from 'three-full';
import * as OBJLoader from 'three-obj-loader'

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
  @ViewChild('canvas') canvas: ElementRef;

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
    this.cargo = true;
    console.log(this.imgBack);
    console.log(this.canvas);
    this.importCamiseta();
    this.appComponent.typeNav(this.cargo);
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
    console.log(this.imgBack.nativeElement);
  }

  importCamiseta() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    console.log(this.canvas.nativeElement);

    var renderer = new THREE.WebGLRenderer({canvas : (this.canvas.nativeElement as HTMLCanvasElement)});
    renderer.setSize( window.innerWidth, window.innerHeight );

    console.log(renderer);

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    var animate = function () {
      requestAnimationFrame( animate );

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render( scene, camera );
    };

    animate();
  }

  /*importCamiseta() {
    //This demo is using the plugin "OBJLoader". Don't forget to include it into your page ;)
//You can find it here : https://github.com/mrdoob/three.js/tree/cf584a60bdfd24c42eaa81d484533364742bda44/examples/js/loaders

var renderer, scene, camera, banana;

var ww = window.innerWidth,
  wh = window.innerHeight;
  
  let canvas = this.containerCamisa;

function init(){

	renderer = new THREE.WebGLRenderer({canvas : canvas});
	renderer.setSize(ww,wh);

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(50,ww/wh, 0.1, 10000 );
	camera.position.set(0,0,500);
	scene.add(camera);

	//Add a light in the scene
	let directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
	directionalLight.position.set( 0, 0, 350 );
	directionalLight.lookAt(new THREE.Vector3(0,0,0));
	scene.add( directionalLight );

	//Load the obj file
	loadOBJ();
}

var loadOBJ = function(){
	//Manager from ThreeJs to track a loader and its status
	var manager = new THREE.LoadingManager();
	//Loader for Obj from Three.js
	var loader = new THREE.OBJLoader( manager );
  
	//Launch loading of the obj file, addBananaInScene is the callback when it's ready 
	loader.load( 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/banana.obj', addBananaInScene);

};

var addBananaInScene = function(object){
	banana = object;
	//Move the banana in the scene
	banana.rotation.x = Math.PI/2;
	banana.position.y = -200;
	banana.position.z = 50;
	//Go through all children of the loaded object and search for a Mesh
	object.traverse( function ( child ) {
		//This allow us to check if the children is an instance of the Mesh constructor
		if(child instanceof THREE.Mesh){
			child.material.color = new THREE.Color(0X00FF00);
			//Sometimes there are some vertex normals missing in the .obj files, ThreeJs will compute them
			child.geometry.computeVertexNormals();
		}
	});
	//Add the 3D object in the scene
	scene.add(banana);
	render();
};


var render = function () {
	requestAnimationFrame(render);

	//Turn the banana
	banana.rotation.z += .01;

	renderer.render(scene, camera);
};

init();
  }*/
}
