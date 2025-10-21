import { Component } from '@angular/core';
import { PokeApi } from '../services/poke-api';

@Component({
  selector: 'app-pokemones',
  imports: [],
  templateUrl: './pokemones.html',
  styleUrl: './pokemones.css'
})
export class Pokemones {
  constructor(private pokeApi: PokeApi) {}
  pokemones: any[] = [];
  miPokemon: any = null;

  ngOnInit() {
    this.traerPokemones();
  }

  traerPokemones(){
    this.pokeApi.obtenerPokemones().subscribe((response: any) => {
      console.log(response);
      this.pokemones = response.results;
    })
  }

  obtenerPokemon(id: any){
    this.pokeApi.obtenerPokemonEspecifico(id).subscribe((response: any) => {
      console.log(response);
      this.miPokemon = response;
    })
  }
}
