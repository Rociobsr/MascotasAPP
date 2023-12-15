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
  ngOnInit():void{
    this.getMasclist();
  }
 

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

  getMasclist() {
    const storedMascotas = localStorage.getItem('mascotas');
    this.mascotas = storedMascotas ? JSON.parse(storedMascotas) : [];
  }

    //=====AGREGAR Mascota======
    addMasc() {
      if (this.mascota.nombre && this.mascota.raza && this.mascota.contacto && this.mascota.descripcion) {
        const existingMascotas = JSON.parse(localStorage.getItem('mascotas') || '[]');
        this.mascota.id = Date.now(); // Assigning a unique ID, you may use a better strategy for ID generation
        existingMascotas.push(this.mascota);
        localStorage.setItem('mascotas', JSON.stringify(existingMascotas));
        this.presentToast({ message: 'Mascota creada' });
        this.limpiar();
        this.getMasclist();
      } else {
        this.presentToast({ message: 'Error al registrar Mascota, debe llenar los campos' });
      }
    }

    getMascId(id: any) {
      const existingMascotas = JSON.parse(localStorage.getItem('mascotas') || '[]');
      const mascota = existingMascotas.find(m => m.id === id);
      if (mascota) {
        // Logic to handle a specific mascot based on ID
        console.log(mascota);
      } else {
        console.error('Mascota no encontrada');
      }
    }

    deleteMasc(id: any) {
      let existingMascotas = JSON.parse(localStorage.getItem('mascotas') || '[]');
      existingMascotas = existingMascotas.filter(m => m.id !== id);
      localStorage.setItem('mascotas', JSON.stringify(existingMascotas));
      this.presentToast({ message: 'Mascota eliminada' });
      this.getMasclist();
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