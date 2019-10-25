import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  obtenerUsuarios() {
    let params = new HttpParams().append('page', '1');
    params = params.append('nombre', 'Paula Campos');

    // Enviar por header
    // const headers = new HttpHeaders({
    //   'token-usuario': 'ABASD34634634346GSDFSD45'
    // });

    return this.http.get('https://reqres123.in/api/user', {
      params
      // headers
    }).pipe(
      map((res: any) => res['data'])
    );
  }
}
