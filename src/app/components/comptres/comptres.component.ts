import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-comptres',
  templateUrl: './comptres.component.html',
  styleUrls: ['./comptres.component.scss'], 
})
export class ComptresComponent {
  petName: string = '';
  description: string = '';
  capturedImage: string | undefined;

  onSubmit() {
    // Lógica para enviar el formulario, puedes agregar un servicio aquí.
    console.log('Formulario Enviado');
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.capturedImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}

