import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsolaComponent } from './consola.component';
import { CatalogoComponent } from '../catalogo/catalogo.component';

@NgModule({
  declarations: [ConsolaComponent, CatalogoComponent],
  imports: [CommonModule],
})
export class ConsolaModule {}
