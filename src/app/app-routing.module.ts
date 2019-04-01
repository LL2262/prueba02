import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PuestosComponent } from './components/puestos/puestos.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'puestos', component: PuestosComponent},
  {path: 'empleados', component: EmpleadosComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
