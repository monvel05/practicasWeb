import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Pokeapi {
  constructor(private http: HttpClient) {}

  traerPokemones(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?');
  }

  traerPokemonUrl(url: string): Observable<any> {
    return this.http.get(url);
  }
}
