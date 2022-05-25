import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.css']
})
export class StartScreenComponent implements OnInit {

  title: string = "Pokemon Memory";
  @Input() pokemonScreen: number = 0;
  @Output() startGameEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.setVolume();
  }

  startGame(pokemonLength: number) {
    this.startGameEvent.emit(pokemonLength);
  }

  setVolume(){
    let audio: any = document.getElementById('screenAudio')
    audio.volume = 0.2;
  }

}
