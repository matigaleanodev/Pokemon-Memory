import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogScoreComponent } from './dialog-score/dialog-score.component';

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
  

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.pokemonScreen = this.getRandomInt(1, 152);
  }

  ngOnChanges(){
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
  //funcion para terminar el juego
  gameEnd(){
    this.gameEnded = true;
    const dialogRef = this.dialog.open(DialogScoreComponent, {
      height: '250px',
      width: '250px',
      data: {
        player: this.gameParams.player,
        matches: this.matches,
        movements: this.movements,
        time: this.gameParams.time,
        generation: this.gameParams.generation
      }
    });
  }
}
