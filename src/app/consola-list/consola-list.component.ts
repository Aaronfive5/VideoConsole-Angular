import { Component, OnInit } from '@angular/core';
import { Consola } from '../models/consola.interface';
import { ConsolaService } from '../service/consola.service';

@Component({
  selector: 'app-consola-list',
  templateUrl: './consola-list.component.html',
  styleUrls: ['./consola-list.component.css'],
})
export class ConsolaListComponent implements OnInit {
  titulo: string = 'Consolas de Videojuegos';

  consola: Consola[] = [];

  constructor(private servicio: ConsolaService) {}

  ngOnInit(): void {
    this.consola = this.servicio.listadoConsola();
  }
}
