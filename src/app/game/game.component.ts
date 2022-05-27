import { Component, OnInit } from '@angular/core';

import { GameParams } from './interface';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  
  pokemonScreen: number = 0;
  pokemonLength: number = 0;

  gameStarted: boolean = false;
  restart: number = 0;
  movements: number = 0;
  matches: number = 12;

  gameParams: GameParams = {
    player: '',
    cards: 8,
    time: 60,
    generation: 'all'
  }
  

  constructor() { }

  ngOnInit(): void {
    this.pokemonScreen = this.getRandomInt(1, 152);
  }
  // funcion para generar numeros aleatorios
  getRandomInt(min: number, max: number): any {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  // funcion para generar las cartas
  getCards(params: GameParams): boolean{
    this.gameParams = params;
    this.matches = this.gameParams.cards;
    this.pokemonLength = this.gameParams.cards;
    return this.gameStarted = true;
  }
  //funcion para reiniciar el juego
  restartGame(){
    this.restart += 1;
    this.matches = this.gameParams.cards
    this.movements = 0;
  }
  //funcion para sumar movimientos
  addMovement(movement: number){
    this.movements += movement;
  }
  addMatch(match: number){
    this.matches -= match;
  }
}
