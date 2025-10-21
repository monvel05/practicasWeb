import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApi {
  constructor(private http: HttpClient) { }
  obtenerPokemones() : Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?');
  }

  obtenerPokemonEspecifico(id: any) : Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  }
}
