import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-mascota',
  templateUrl: './buscar-mascota.page.html',
  styleUrls: ['./buscar-mascota.page.scss'],
})
export class BuscarMascotaPage implements OnInit {
    horario: string = '';
    lugar: string = '';
    mensaje: string = '';
    reconpensa:string = '';
    mensaje2: string = '';
    
  
    ionViewWillEnter() {
      this.horario = localStorage.getItem('hora') || 'sinbusqueda';
      this.lugar = localStorage.getItem('lugar') || 'sinbusqueda';
      this.mensaje = localStorage.getItem('mensaje') || 'sinbusqueda';
      this.reconpensa = localStorage.getItem('reconpensa') || 'sinbusqueda';
    }
  
  
    constructor() { }
  
    onSearchChange(event:any){console.log(event);}
    ngOnInit() {
    }

    cancelar(){
      localStorage.setItem('hora', ' ');
      localStorage.setItem('lugar',' ')
      localStorage.setItem('mensaje',' ')
      localStorage.setItem('reconpensa',' ')
      this.mensaje2='Busqueda eliminada Correctamente'
  
    }
}
