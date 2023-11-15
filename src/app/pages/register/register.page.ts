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

    this.http.post('http://18.230.155.252/registrar_usuario', formData)
      .subscribe(response => {
        console.log(response);
        // Manejar la respuesta según tus necesidades
      });



  }


}
