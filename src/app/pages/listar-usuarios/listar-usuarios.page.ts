import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.page.html',
  styleUrls: ['./listar-usuarios.page.scss'],
})
export class ListarUsuariosPage implements OnInit {

  jsonData: any[];
  constructor(private http: HttpClient) { }
  ngOnInit() {
    const url = 'https://flapirest.ddns.net/get_data_usuarios'; // Reemplaza esto con la URL real de tu JSON
  
    this.http.get(url).subscribe((data: any) => {
      console.log('Datos JSON:', data);
      this.jsonData = data;

      // Aquí puedes realizar cualquier procesamiento adicional que necesites con los datos.
    });
  }
  submitForm(item: any) {
    const url = `https://flapirest.ddns.net/post_data_usuarios/${item.id}`;
    const formData = new FormData();
  
    formData.append('nombre', item.usuario);
    formData.append('contrasena', item.contrasenna);
    // Puedes seguir agregando otros campos del formulario a `formData` según sea necesario
  
    this.http.post(url, formData)
      .subscribe(
        (data: any) => {
          console.log('Respuesta del servidor:', data);
          // Puedes manejar la respuesta aquí según tus necesidades
        },
        (error) => {
          console.error('Hubo un error:', error);
          // Manejar el error según tus necesidades
        }
      );
  }

  deleteUser(id: number) {
    const deleteUrl = `https://flapirest.ddns.net/delete_usuario/${id}`; // Reemplaza con la URL correcta
  
    console.log('enviado');
  
    this.http.post(deleteUrl, null) // No es necesario enviar un cuerpo en una solicitud de eliminación
      .subscribe(
        (data: any) => {
          console.log('Respuesta del servidor:', data);
          // Puedes manejar la respuesta aquí según tus necesidades
        },
        (error) => {
          console.error('Hubo un error:', error);
          // Manejar el error según tus necesidades
        }
      );
  }
  

}
