import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MortyApi {
  constructor(private http: HttpClient) { }
  obtenerPersonajes() : Observable<any> {
    return this.http.get('https://rickandmortyapi.com/api/character');
  }
}
