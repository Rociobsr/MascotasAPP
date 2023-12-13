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
  submitForm(i: number) {
    const form = document.forms[i];
    const formData = new FormData(form);
    
    fetch(form.action, {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      console.log('Respuesta del servidor:', data);
      
    });
  }

  deleteUser(id: number) {
    const deleteUrl = 'https://flapirest.ddns.net/delete_usuario/' + id; // Reemplaza con la URL correcta
    console.log('enviado')
    fetch(deleteUrl, {
      method: 'POST',
    })
    .then(response => response.json())
    .then(data => {
      console.log('Respuesta del servidor:', data);
      
    });
  }
  

}
