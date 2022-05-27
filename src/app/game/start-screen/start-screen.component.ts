import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GameParams } from '../interface';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.css']
})
export class StartScreenComponent implements OnInit {

  title: string = "Pokemon Memory";
  @Input() pokemonScreen: number = 0;
  @Output() startGameEvent = new EventEmitter<GameParams>();
  form: FormGroup;
  cards: any = [{value:8, name:'4x4'}, {value:10, name:'4x5'}, {value:12, name:'4x6'}];
  times: any = [45, 60, 75];
  generations: any = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'all'];



  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      player: ['', [Validators.required]],
      cards: ['', [Validators.required]],
      time: ['', [Validators.required]],
      generation: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.setVolume();
  }
  

  startGame(event: Event) {
    event.preventDefault();
    if (this.form.valid){
      this.startGameEvent.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
      alert('Please fill all the fields');
    }
  }

  setVolume(){
    let audio: any = document.getElementById('screenAudio')
    audio.volume = 0.2;
  }

}
