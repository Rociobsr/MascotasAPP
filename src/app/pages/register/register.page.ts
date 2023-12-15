
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'; //librerias importadas para crear formulario, controlar y validar registros
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(private http: HttpClient) { }

  usuario: string;
  contrasena: string;
  correo: string;

  ngOnInit() {
  }
  registerUser() {
    console.log('usuario:', this.usuario);
    console.log('contrasena:', this.contrasena);
    
    const formData = new FormData();
    formData.append('usuario', this.usuario); 
    formData.append('contrasena', this.contrasena); 
    formData.append('correo', this.correo);
  
    // Las cabeceras para el FormData no son necesarias en este caso, pero se pueden añadir si es requerido por el servidor
    // const headers = new HttpHeaders();
  
    this.http.post('https://flapirest.ddns.net/registrar_usuario', formData)
      .subscribe(
        (response) => {
          console.log(response);
          // Manejar la respuesta según tus necesidades
        },
        (error) => {
          console.error('Hubo un error:', error);
          // Manejar el error según tus necesidades
        }
      );
  }


}
