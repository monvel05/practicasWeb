import { Component } from '@angular/core';
import { Pokeapi } from '../services/pokeapi';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  constructor(private pokeapi: Pokeapi) {}
  pokemones: any[] = [];
  miPokemon: any = null;

  ngOnInit() {
    this.mostrarPokemones();
  }

  mostrarPokemones() {
    this.pokeapi.traerPokemones().subscribe((response: any) => {
      console.log(response);
      this.pokemones = response.results;
    });
  }

  traerPokemon(url: string) {
    console.log('url obtenida');
    this.pokeapi.traerPokemonUrl(url).subscribe((response: any) => {
      console.log(response);
      this.miPokemon = response;
    });
  }


}
