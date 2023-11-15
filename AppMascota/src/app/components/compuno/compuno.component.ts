import { Component, OnInit } from '@angular/core';
import { ServiceRestService } from 'src/app/services/service-rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, ToastOptions } from '@ionic/angular'; 


@Component({
  selector: 'app-compuno',
  templateUrl: './compuno.component.html',
  styleUrls: ['./compuno.component.scss'],
})


export class CompunoComponent  implements OnInit {

  data: any;

  mascotas: any;

  usuario: any;
  
  mascota: any ={
    id: null,
    nombre: "",
    raza: "",
    contacto: "",
    descripcion: ""
  }

 
  constructor(private activateRoute: ActivatedRoute, private router: Router, private api: ServiceRestService, private toastController: ToastController) { 
    this.usuario=localStorage.getItem("usuario")
  }
  ngOnInit():void{}
 

  limpiar(){
    this.mascota.nombre="";
    this.mascota.raza="";
    this.mascota.contacto="";
    this.mascota.descripcion="";
  }

  ionViewWillEnter() {
    this.getMasclist();
    this.limpiar();
  }

  //====GET ALL Mascota=====
  getMasclist(){
    this.api.getMascList().subscribe((data) =>{
      console.log(data);
      this.mascotas = data;
    });
  }

    //=====AGREGAR Mascota======
    addMasc(){
      if (this.mascota.nombre == "" || this.mascota.raza == "" || this.mascota.contacto == "" || this.mascota.descripcion == "") {
        this.presentToast({
          message: ' Error al registrar Mascota, debe llenar los campos ',
          duration: 3000,
          position: 'middle',
          icon: 'alert-circle-outline'
        });
        return;
      }else{
        this.api.addMasc(this.mascota).subscribe({
          next: (() => {
            console.log("Masc creado: "+ this.mascota)
            this.presentToast({
              message: ' Mascota creada ',
              duration: 3000,
              position: 'middle',
              icon: 'alert-circle-outline'
            });
            this.getMasclist();
            this.limpiar();
          })
        })
      }
    }

    getMascId(id: any){
      this.api.getMascId(id).subscribe((data) => {
        console.log(data);
        this.mascota = data
      })
    }

    deleteMasc(id: any){
      this.api.deleteMasc(id).subscribe({
        next: (() => {
          this.presentToast({
            message: 'Mascota eliminada',
            duration: 3500,
            position: 'middle',
            icon: 'alert-circle-outline'
          });
          console.log("Mascota eliminado");
          this.getMasclist();
        }),
        error: (error => {
          console.log("Error"+ error)
        })
      })
    }

    cerrarSesion(){
      localStorage.removeItem('ingresado');
      this.router.navigate(["/inicio"]);
    }

 
   async presentToast(opts?: ToastOptions) {
    const toast = await this.toastController.create(opts);
    toast.present();
  }
 
  segmentChanged($event: any){
    console.log($event);    
    let direccion=$event.detail.value;
    this.router.navigate(['home/'+direccion])
  }

}
