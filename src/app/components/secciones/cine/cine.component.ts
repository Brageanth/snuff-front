import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent implements OnInit {

  cargo: boolean;

  constructor(
    private appComponent: AppComponent

  ) { }

  ngOnInit() {
    this.cargo = true;
    this.appComponent.typeNav(this.cargo);
  }

}
