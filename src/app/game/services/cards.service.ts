import { Injectable } from '@angular/core';

import { CardInfo, GameParams } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  min: number = 1;
  max: number = 899;
  pokemonLength: number = 0; // cantidad de pokemons
  cardInfo: CardInfo[] = [];
  gameParams: GameParams ={
    player: '',
    cards: 8,
    generation: 'all'
  };

  constructor() { }

  // metodo para generar numeros aleatorios
  getRandomInt(min: number, max: number): any {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  // metodo para desordenar el array
  shuffle(array: number[]): number[] {
    array.sort(() => Math.random() - 0.5);
    return array;
  }
  // metodo para comprobar si se repiten elementos en el array
  checkDuplicates(array: number[]){
    return array.some((a, b) => array.indexOf(a) != b);
  }
  
  //metodo para eliminar elementos repetidos del array
  removeDuplicates(array: number[]): number[] {
    return array.filter((a, b) => array.indexOf(a) == b);
  }
  // metodo para generar informacion de las cartas
  getCardInfo(array: number[]){
    for (let i in array) {
      this.cardInfo.push({
        id: array[i],
        state: 'default'
      });
    }
  }
  //metodo para comprobar si se repiten elementos en el array
  checkArray(array: number[]){
    while (this.checkDuplicates(array) && array.length < this.pokemonLength) {
      array = this.removeDuplicates(array);
      let i = this.pokemonLength - array.length;
      for (let j = 0; j < i; j++) {
        array.push(this.getRandomInt(this.min, this.max));
      }
    }
  }
  // metodo para generar informacion de las cartas
  getCardArray(){
    let pokemonList: number[] = []
    for (let i = 0; i < this.pokemonLength; i++) {
      pokemonList.push(this.getRandomInt(this.min, this.max));
    }
    this.checkArray(pokemonList);
    pokemonList = pokemonList.concat(pokemonList);
    pokemonList = this.shuffle(pokemonList);
    this.getCardInfo(pokemonList);
  }
}