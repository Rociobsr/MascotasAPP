import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-compdos',
  templateUrl: './compdos.component.html',
  styleUrls: ['./compdos.component.scss'],
})
export class CompdosComponent  implements OnInit {

  public hora: string = '';  // Variable para almacenar el nombre de usuario ingresado
    public lugar: string = '';
    public mensaje: string = '';
    public reconpensa: number = 0;
    public mensaje2: string = '';
    constructor() {
      this.hora='';
      this.lugar='';
      this.mensaje = '';
      this.reconpensa=0; 
      this.mensaje2 = ''; 
     }
  
    ngOnInit() {
    }
  
    crearBusqueda(){
      localStorage.setItem('hora', this.hora);
      localStorage.setItem('lugar',this.lugar)
      localStorage.setItem('mensaje',this.mensaje)
      localStorage.setItem('reconpensa', this.reconpensa.toString());
      this.mensaje2='Busqueda Creada Correctamente'
  
  
    }
  
    cancelar(){
      localStorage.setItem('hora', 'Sin info');
      localStorage.setItem('lugar','Sin info')
      localStorage.setItem('mensaje','Sin info')
      localStorage.setItem('reconpensa','Sin info')
      this.mensaje2='Busqueda eliminada Correctamente'
  
    }
  
}
