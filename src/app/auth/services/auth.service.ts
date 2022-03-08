import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';

import { environment } from '../../../environments/environment';
import { AuthResponse, Usuario } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;

  get usuario(){
    // Operador rest para que accidentalmente no modifique el valor de el usuario
    return {...this._usuario};
  }

  constructor( private http: HttpClient ) { }

  login( email: string, password: string ){

    const url  = `${this.baseUrl}/auth`;
    const body = { email, password };

    return this.http.post<AuthResponse>( url, body )
      .pipe(
        tap( resp => {
          if(resp.ok){
            this._usuario = {
              name: resp.name!,
              uid: resp.uid!
            }
          }
        }),
        map( valid => valid.ok),
        catchError( err => of(false))
      )
  }
}
