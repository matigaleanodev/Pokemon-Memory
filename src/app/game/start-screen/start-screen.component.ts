import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { GameParams } from '../interface';
import { CardsService } from '../services/cards.service';
import { GameplayService } from '../services/gameplay.service';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {

  title: string = "Pokemon Memory";
  @Input() pokemonScreen: number = 0;
  @Output() startGameEvent = new EventEmitter<GameParams>();
  form: UntypedFormGroup;



  constructor(
    public cardsService: CardsService,
    public gameplay: GameplayService,
    private formBuilder: UntypedFormBuilder
  ) {
    this.form = this.formBuilder.group({
      player: ['', [Validators.required]],
      cards: ['', [Validators.required]],
      generation: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.startAudio();
  }
  startGame(event: Event) {
    event.preventDefault();
    if (this.form.valid){
      this.startGameEvent.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
      alert('Completa todos los campos');
    }
  }

  
  startAudio(){
    let audio = new Audio();
    audio.src = "assets/audios/title-screen.mp3";
    audio.load();
    audio.volume = 0.2;
    audio.play();
  }
}

