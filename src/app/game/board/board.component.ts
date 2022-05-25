import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardInfo } from '../interface';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  
  // Id de pokemones, exp: 1 = Bulbasaur, 2 = Charmander, etc.
  min: number = 1;
  max: number = 899;
  matches: number = 0;
  flippedCards: number[] = [];
  cardInfo: CardInfo[] = [];
  @Input() pokemonLength: number = 0; // cantidad de pokemons
  @Input() gameStarted: boolean = false;
  @Input() restart: number = 0;
  @Output() movementEvent = new EventEmitter();
  @Output() matchEvent = new EventEmitter();

  
  constructor(
  ) { }

  ngOnInit(): void {
    this.getCards(this.pokemonLength);
  }
  ngOnChanges(): void {
    if (this.restart != 0) {
      this.restartGame();
    }
  }
  // funcion para generar numeros aleatorios
  getRandomInt(min: number, max: number): any {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  // funcion para desordenar el array
  shuffle(array: number[]): number[] {
    array.sort(() => Math.random() - 0.5);
    return array;
  }
  // funcion para generar informacion de las cartas
  getCardInfo(){
    let pokemonList: number[] = []
    for (let i = 0; i < this.pokemonLength; i++) {
      pokemonList.push(this.getRandomInt(this.min, this.max));
    }
    pokemonList = pokemonList.concat(pokemonList);
    pokemonList = this.shuffle(pokemonList);
    for (let i in pokemonList) {
      this.cardInfo.push({
        id: pokemonList[i],
        state: 'default'
      });
    }
  }
  // funcion para generar las cartas
  getCards(pokemonLength: number): boolean{
    this.cardInfo = [];
    this.pokemonLength = pokemonLength;
    this.getCardInfo();
    return this.gameStarted = true;
  }
  // funcion para reiniciar el juego
  restartGame(){
      this.cardInfo = [];
      this.matches = 0;
      this.getCards(this.pokemonLength);
  }
  // funcion para comparar las cartas
  flipCard(index: number){
    this.cardInfo[index].state = 'flipped';
    this.flipAudio();
    this.movementEvent.emit(1);
      setTimeout(() => {
        let matches: number = 0;
        if (this.flippedCards.length === 0) {
          this.flippedCards.push(index);
        } else if (this.flippedCards.length === 1 && this.cardInfo[this.flippedCards[0]].id === this.cardInfo[index].id){
            this.cardInfo[index].state = 'matched';
            this.matchAudio();
            matches += 1;
            this.cardInfo[this.flippedCards[0]].state = 'matched';
            this.flippedCards = [];
  
          } else {
            this.cardInfo[this.flippedCards[0]].state = 'default';
            this.cardInfo[index].state = 'default';
            this.flippedCards = [];
          }
          
          this.matchEvent.emit(matches);
      } , 600);
  }

  flipAudio(){
    let audio = new Audio();
    audio.src = "assets/audios/card-flip.wav";
    audio.load();
    audio.play();
  }
  matchAudio(){
    let audio = new Audio();
    audio.src = "assets/audios/match.wav";
    audio.load();
    audio.play();
  }

  

}
