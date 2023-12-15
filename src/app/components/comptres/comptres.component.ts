import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comptres',
  templateUrl: './comptres.component.html',
  styleUrls: ['./comptres.component.scss'],
})
export class ComptresComponent implements OnInit {
  petName: string = '';
  description: string = '';
  capturedImage: string | ArrayBuffer | null = null;
  submittedReports: any[] = [];

  ngOnInit() {
    // Recuperar informes almacenados en el almacenamiento local
    const storedReports = localStorage.getItem('submittedReports');
    if (storedReports) {
      this.submittedReports = JSON.parse(storedReports);
    }
  }

  onSubmit() {
    // Lógica para enviar el formulario
    const newReport = {
      petName: this.petName,
      description: this.description,
      capturedImage: this.capturedImage,
    };

    this.submittedReports.push(newReport);

    // Limpiar los campos después de enviar el formulario
    this.petName = '';
    this.description = '';
    this.capturedImage = null; // Restablecer a null después de enviar la imagen

    // Almacenar informes en el almacenamiento local
    localStorage.setItem('submittedReports', JSON.stringify(this.submittedReports));
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.capturedImage = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  eliminarReporte(report: any) {
    // Lógica para eliminar un informe
    const index = this.submittedReports.findIndex(r => r === report);
    if (index !== -1) {
      this.submittedReports.splice(index, 1);
      localStorage.setItem('submittedReports', JSON.stringify(this.submittedReports));
    }
  }
} 
