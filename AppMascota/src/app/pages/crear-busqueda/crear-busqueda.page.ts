import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-busqueda',
  templateUrl: './crear-busqueda.page.html',
  styleUrls: ['./crear-busqueda.page.scss'],
})
export class CrearBusquedaPage implements OnInit {

    public hora: string = '';  // Variable para almacenar el nombre de usuario ingresado
      public lugar: string = '';
      public mensaje: string = '';
      public reconpensa: number = 0;
      constructor() {
        this.hora='';
        this.lugar='';
        this.mensaje = '';
        this.reconpensa=0;  
       }
    
      ngOnInit() {
      }
    
      crearBusqueda(){
        localStorage.setItem('hora', this.hora);
        localStorage.setItem('lugar',this.lugar)
        localStorage.setItem('mensaje',this.mensaje)
        localStorage.setItem('reconpensa', this.reconpensa.toString());
        this.mensaje='Busqueda Creada Correctamente'
    
    
      }
    
      cancelar(){
        localStorage.setItem('hora', 'Sin info');
        localStorage.setItem('lugar','Sin info')
        localStorage.setItem('mensaje','Sin info')
        localStorage.setItem('reconpensa','Sin info')
        this.mensaje='Busqueda eliminada Correctamente'
    
      }
    
  }


