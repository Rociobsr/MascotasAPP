import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'; //librerias importadas para crear formulario, controlar y validar registros
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {
    usuario: '',
    password: '',
  };

  usuario: string;
  contrasena: string;

  //se le da formato a la variable
  formularioLogin: FormGroup;

  //contructor publico que se crea a partir del FormBuilder, se le dan parametros que se quieren aplicar en el formlario
  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController,
    private router: Router,
    private http: HttpClient
  ) {
    //modulos a importar

    this.formularioLogin = this.fb.group({
      nombre: new FormControl('', Validators.required), //como será llamado, se le asigna como nuevo objeto new FormControl y se le dan los parametros que estará vacio y que se requiere validar
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}
  Ingresar() {
    console.log('usuario:', this.usuario);
    console.log('contrasena:', this.contrasena);
    const formData = new FormData();
    formData.append('usuario', this.usuario); 
    formData.append('contrasena', this.contrasena); 

    this.http.post('https://flapirest.ddns.net/login', formData)
      .subscribe(response => {
        console.log(response);
        if (response === true) {
          // Realizar acciones específicas si la respuesta es True
          localStorage.setItem('ingresado', 'true');
          localStorage.setItem('usuario',this.usuario)
          this.router.navigate(['/home']);

        }
      });


  }
}
