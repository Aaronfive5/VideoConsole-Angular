import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Consola } from '../models/consola.interface';
import { ConsolaService } from '../service/consola.service';

@Component({
  selector: 'app-consola',
  templateUrl: './consola.component.html',
  styleUrls: ['./consola.component.css'],
})
export class ConsolaComponent implements OnInit {
  id = 0;
  consola!: Consola;
  paramsSubscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private servicio: ConsolaService
  ) {}

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });

    this.consola = this.servicio.obtenerUno(this.id);
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
