import { Component, OnInit } from '@angular/core';


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
  matches: number = 0;
  

  constructor() { }

  ngOnInit(): void {
    this.pokemonScreen = this.getRandomInt(1, 152);
  }
  // funcion para generar numeros aleatorios
  getRandomInt(min: number, max: number): any {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  // funcion para generar las cartas
  getCards(pokemonLength: number): boolean{
    this.pokemonLength = pokemonLength;
    return this.gameStarted = true;
  }
  //funcion para reiniciar el juego
  restartGame(){
    this.restart += 1;
    this.matches = 0;
    this.movements = 0;
  }
  //funcion para sumar movimientos
  addMovement(movement: number){
    this.movements += movement;
  }
  addMatch(match: number){
    this.matches += match;
  }
}
