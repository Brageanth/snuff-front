import { Component, OnInit, Input } from '@angular/core';
import { Prenda } from '../../../models/prenda'

@Component({
  selector: 'app-colore',
  templateUrl: './colore.component.html',
  styleUrls: ['./colore.component.css']
})
export class ColoreComponent implements OnInit {

  @Input() prenda: Prenda;

  constructor() { }

  ngOnInit() {
  }

}
