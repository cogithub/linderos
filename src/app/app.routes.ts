import { Routes } from '@angular/router';
import { PruebaComponent } from './prueba/prueba';
import { DetalleComponent } from './prueba/prueba';

export const routes: Routes = [
  { path: 'prueba', component: PruebaComponent },
  { path: 'prueba/detalle', component: DetalleComponent }
];
