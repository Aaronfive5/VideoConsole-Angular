import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConsolaComponent } from './consola/consola.component';
import { ConsolaListComponent } from './consola-list/consola-list.component';
import { FormsModule } from '@angular/forms';
import { ConsolaModule } from './consola/consola.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent, ConsolaListComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ConsolaModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
