import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() pokemon: number = 0;
  @Input() state = 'default';
  @Input() id = 0;
  @Output() flip = new EventEmitter<number>();

  constructor() {}
   
  ngOnInit(): void {
  }
  
  onClick(): void { 
    if (this.state === 'default') {
    this.flip.emit(this.id);
    }
  }
}

