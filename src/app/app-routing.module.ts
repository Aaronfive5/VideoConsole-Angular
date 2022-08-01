import { NgModule, ɵɵsetComponentScope } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsolaListComponent } from './consola-list/consola-list.component';
import { ConsolaComponent } from './consola/consola.component';

const routes: Routes = [
  { path: '', component: ConsolaListComponent },
  { path: 'consola/:id', component: ConsolaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
