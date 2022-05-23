import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() pokemon: number = 0;
  @Input() flippedCard: number = 0;
  @Input() state = 'default';
  @Output() flip = new EventEmitter<number>();

  constructor(
  ) {
  }
   

  ngOnInit(): void {
  }
  
  onClick(): void { 
    if (this.state === 'default') {
    this.state = 'flipped';
    this.flip.emit(this.pokemon);
    this.compareCards(this.pokemon);
    this.removeFlip();
    }
  }
  removeFlip(){
    if (this.state == 'default'){
      document.getElementById(this.pokemon.toString())?.classList.remove('flipped');
    }
  }
  compareCards(id: number){
    if (this.flippedCard === 0) {
      this.flippedCard = id;
    } else if (this.flippedCard != id) {
      if (this.state === 'flipped') {
        this.state = 'default';
      }
      this.flippedCard = 0;    
    } else {
      this.state = 'matched';  
    }
  }
}

