import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardInfo, GameParams } from '../interface';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  
  min: number = 1;
  max: number = 899;
  matches: number = 0;
  flippedCards: number[] = [];
  cardInfo: CardInfo[] = [];
  @Output() matchEvent = new EventEmitter();
  @Output() movementEvent = new EventEmitter();
  @Input() pokemonLength: number = 0; // cantidad de pokemons
  @Input() gameStarted: boolean = false;
  @Input() restart: number = 0;
  @Input() gameParams: GameParams = {
    player: '',
    cards: 8,
    time: 60,
    generation: 'all'
  }
  
  constructor(
  ) { }

  ngOnInit(): void {
    this.getGeneration(this.gameParams.generation);
    this.getCards(this.pokemonLength);
  }
  ngOnChanges(): void {
    if (this.restart != 0) {
      this.restartGame();
    }
  }
  // metodo para generar numeros aleatorios
  getRandomInt(min: number, max: number): any {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  // metodo para desordenar el array
  shuffle(array: number[]): number[] {
    array.sort(() => Math.random() - 0.5);
    return array;
  }
  // metodo para generar informacion de las cartas
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
  // metodo para generar las cartas
  getCards(pokemonLength: number): boolean{
    this.cardInfo = [];
    this.pokemonLength = pokemonLength;
    this.getCardInfo();
    return this.gameStarted = true;
  }
  // metodo para obtener generacion de pokemon
  getGeneration(generation: string){
    switch (generation) {
      case 'all':
        return this.min = 1, this.max = 899;
      case 'first':
        return this.min = 1, this.max = 152;
      case 'second':
        return this.min = 152, this.max = 252;
      case 'third':
        return this.min = 252, this.max = 387;
      case 'fourth':
        return this.min = 387, this.max = 494;
      case 'fifth':
        return this.min = 494, this.max = 650;
      case 'sixth':
        return this.min = 650, this.max = 722;
      case 'seventh':
        return this.min = 722, this.max = 810;
      case 'eighth':
        return this.min = 809, this.max = 899;
      default:  return this.min = 1, this.max = 899;
    }
  }
  // metodo para reiniciar el juego
  restartGame(){
      this.cardInfo = [];
      this.matches = 0;
      this.getCards(this.pokemonLength);
  }
  // metodo para comparar las cartas
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
