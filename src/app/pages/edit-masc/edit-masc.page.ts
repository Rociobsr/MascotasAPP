import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, ToastOptions } from '@ionic/angular';
import { ServiceRestService } from 'src/app/services/service-rest.service';

@Component({
  selector: 'app-edit-masc',
  templateUrl: './edit-masc.page.html',
  styleUrls: ['./edit-masc.page.scss'],
})
export class EditMascPage implements OnInit {
  data: any;

  mascotas: any;
  
  mascota: any ={
    id: null,
    nombre: "",
    raza: "",
    contacto: "",
    descripcion: ""
  }


  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private api: ServiceRestService,
    private toastController: ToastController
  ) {}

  getIdFromUrl(){
    let url = this.router.url;
    let arr = url.split('/',3);
    let id = parseInt(arr[2])
    return id;
  }

  ngOnInit() {
    this.getMascId(this.getIdFromUrl());
  }

  updateMasc(){
    this.api.updateMasc(this.mascota.id, this.mascota).subscribe({
      next: (() =>{
        console.log("Actualizado correctamente: "+this.mascota);
        this.getMasclist();
        this.presentToast({
          message: 'Datos de la mascota actualizados, redirigiendo al Home',
          duration: 3500,
          position: 'middle',
          icon: 'alert-circle-outline'
        });
        this.router.navigateByUrl('home');
      }),
      error: (error => {
        console.log("Error "+ error)
      })
    })
  }
 

  //====GET ALL ZOO=====
  getMasclist() {
    this.api.getMascList().subscribe((data) => {
      console.log(data);
      this.mascota = data;
    });
  }

  getMascId(id: any) {
    this.api.getMascId(id).subscribe((data) => {
      console.log(data);
      this.mascota = data;
    });
  }


  
  async presentToast(opts?: ToastOptions) {
    const toast = await this.toastController.create(opts);
    toast.present();
  }
}
