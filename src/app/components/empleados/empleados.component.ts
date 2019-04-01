import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Puesto, Empleado } from 'src/app/interfaces/interfaces';
declare var $: any;

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  public puestos: Puesto[]
  public empleado: Empleado;
  public empleados: Empleado[];

  constructor(private _dataService: DataService) { 
    this.puestos = [];
    this.empleados = [];
    this.empleado = {};
  }

  ngOnInit() {
    this.cargarPuestos();
    this.cargarEmpleados();
  }

  cargarPuestos(){
    this._dataService.getPuestos().subscribe(
      res => {
        this.puestos = res;
      });
  }

  cargarEmpleados(){
    this._dataService.getEmpleados().subscribe(
      res => {
        this.empleados = res;
      });
  }

  addEmpleado(formEmpleado){
    this._dataService.addEmpleado(this.empleado).subscribe(
      res => {
        this.cargarEmpleados();
    });
    formEmpleado.reset();
    $('#newEmpleado').modal('hide');
  }

  openModalDelete(empleado){
    this.empleado = empleado;
    $('#deleteEmpleado').modal('show');
  }

  deleteEmpleado(){
    this._dataService.deleteEmpleado(this.empleado).subscribe(
      res => {
        this.cargarEmpleados();
    });
    this.empleado = {};
    $('#deleteEmpleado').modal('hide');
  }

  openModalUpdate(empleado){
    this.empleado = empleado;
    $('#updateEmpleado').modal('show');
  }

  updateEmpleado(formEmpleado){
    this._dataService.editEmpleado(this.empleado).subscribe(
      res => {
        this.cargarEmpleados();
      });
      formEmpleado.reset();
      this.empleado = {};
      $('#updateEmpleado').modal('hide');
  }

}
