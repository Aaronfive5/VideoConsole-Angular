import { Component, Input, OnInit } from '@angular/core';
import { Catalogo } from '../models/catalogo.interface';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  @Input() catalogo!: Catalogo;
  constructor() {}

  ngOnInit(): void {}
}
