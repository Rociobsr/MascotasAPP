import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Mascota } from '../clases/mascotas';
import { Injectable, inject } from '@angular/core';
import { Observable, tap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceRestService {

  http = inject(HttpClient);

  URL: string = 'http://localhost:3300';  ;
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }),
  };
  
  //=========GET LISTA MASC============
  getMascList(): Observable<Mascota[]>{
    return this.http.get<Mascota[]>(`${this.URL}/mascotas/`).pipe(
      tap((Mascota)=> console.log('Mascotas obtenidos')),
      catchError(this.handleError<Mascota[]>('Get Mascota', [])) 
    );
  }


  //======= CREAR UNA MASCOTA======
  addMasc(masc: Mascota): Observable<any>{
    return this.http.post<Mascota>(`${this.URL}/mascotas/`, masc, this.httpHeader)
    .pipe(catchError(this.handleError<Mascota>('Add Mascota')))
  }


  //=====ACTUALIZAR INFORMACION MASCOTA======
  updateMasc(id: any, masc: Mascota):Observable<any>{
    return this.http.put(`${this.URL}/mascotas/`+ id, masc,
      this.httpHeader).pipe(
        tap((_) => console.log(`mascota updated: ${id}`)),
        catchError(this.handleError<Mascota[]>('Update Mascota'))
      );
  }

  //=====GET MASCOTA POR ID======
  getMascId(id: any):Observable<Mascota[]>{
    return this.http.get<Mascota[]>(`${this.URL}/mascotas/` + id).pipe(
      tap((_) => console.log(`Mascota fetched: ${id}`)),
      catchError(this.handleError<Mascota[]>(`Get Mascota id=${id}`))
    );
  }

  deleteMasc(id: any): Observable<Mascota[]>{
    return this.http.delete<Mascota[]>(`${this.URL}/mascotas/` + id).pipe(
      tap((_) => console.log(`Mascota deleted: ${id}`)),
      catchError(this.handleError<Mascota[]>(`Delete Mascota`))
    )
  }




  //funcion para manejar errores
  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);
      return of (result as T);
    };
  }


}
