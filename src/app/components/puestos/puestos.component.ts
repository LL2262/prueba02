import { Component, OnInit } from '@angular/core';
import { Puesto } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/service/data.service';

declare var $: any;

@Component({
  selector: 'app-puestos',
  templateUrl: './puestos.component.html',
  styleUrls: ['./puestos.component.css']
})
export class PuestosComponent implements OnInit {

  public puesto: Puesto;
  public puestos: Puesto[];

  constructor(private _dataService: DataService) {
    this.puesto = {};
    this.puestos = [];
   }

  ngOnInit() {
    this.cargarPuestos();
  }

  cargarPuestos(){
    this._dataService.getPuestos().subscribe( 
      res => {
        this.puestos = res;
    })
  }

  addPuesto(newPuesto){
    this._dataService.addPuesto(this.puesto).subscribe(
      res => {
        this.cargarPuestos();
      });
    newPuesto.reset();
    $('#newPuesto').modal('hide');
  }

  openModalDelete(puesto){
    this.puesto = puesto;
    $('#deletePuesto').modal('show');
  }

  deletePuesto(){
    this._dataService.deletePuesto(this.puesto).subscribe(
      res => {
        this.cargarPuestos();
        this.puesto = {};
        $('#deletePuesto').modal('hide');
      });
  }

  openModalEdit(puesto){
    this.puesto = puesto;
    $('#editPuesto').modal('show');
  }

  editPuesto(newPuesto){
    this._dataService.editPuesto(this.puesto).subscribe(
      res => {
        this.cargarPuestos();
        newPuesto.reset();
        this.puesto = {};
        $('#editPuesto').modal('hide');
      })
  }

}
