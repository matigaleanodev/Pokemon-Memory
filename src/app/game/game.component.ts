import { Component, OnInit } from '@angular/core';

import { GameParams } from './interface';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  
  pokemonScreen: number = 0;
  pokemonLength: number = 0;

  gameStarted: boolean = false;
  gameEnded: boolean = false;
  restart: number = 0;
  movements: number = 0;
  matches: number = 12;

  gameParams: GameParams = {
    player: '',
    cards: 8,
    time: 60,
    generation: 'all'
  }
  

  constructor(  ) { }

  ngOnInit(): void {
    this.pokemonScreen = this.getRandomInt(1, 152);
  }
  // metodo para generar numeros aleatorios
  getRandomInt(min: number, max: number): any {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  // metodo para generar las cartas
  getCards(params: GameParams): boolean{
    this.gameParams = params;
    this.matches = this.gameParams.cards;
    this.pokemonLength = this.gameParams.cards;
    return this.gameStarted = true;
  }
  //metodo para reiniciar el juego
  restartGame(){
    this.restart += 1;
    this.gameEnded = false;
    this.matches = this.gameParams.cards
    this.movements = 0;
  }
  //metodo para volver a la pantalla de inicio
  restartApp(){
    this.gameStarted = false;
    this.gameEnded = false;
  }  
  //metodo para sumar movimientos
  addMovement(movement: number){
    this.movements += movement;
  }
  //metodo para restar matches
  addMatch(match: number){
    this.matches -= match;
  }
  //metodo para terminar el juego
  gameEnd(){
    this.gameEnded = true;
  }
}
