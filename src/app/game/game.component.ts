import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  min: number = 1;
  max: number = 899;
  lenght: number = 8;
  pokemonList: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getRandomInt(min: number, max: number): any {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  // getPokemonList(): number[]{
  //   this.pokemonList = Array.from(this.lenght, () => this.getRandomInt(this.min, this.max));
  //   return this.pokemonList;
  // }
    
    

}
