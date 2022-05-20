import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  min: number = 1;
  max: number = 899;
  pokemonLength: number = 0;
  pokemonList: number[] = [];

  

  constructor() { }

  ngOnInit(): void {
    
  }

  getRandomInt(min: number, max: number): any {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getPokemonList(): void {
    this.pokemonList = [];
    for (let i = 0; i < this.pokemonLength; i++) {
      this.pokemonList.push(this.getRandomInt(this.min, this.max));
    }
  }

  getPokemon(pokemonLength: number){
    this.pokemonLength = pokemonLength;
    this.getPokemonList();
  }

  

  

  
  
  

  // getPokemonList(): number[]{
  //   this.pokemonList = Array.from(this.lenght, () => this.getRandomInt(this.min, this.max));
  //   return this.pokemonList;
  // }
    
    

}
