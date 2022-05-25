import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownModule } from 'ngx-countdown';

import { GameComponent } from './game.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { BoardComponent } from './board/board.component';
import { ScoreComponent } from './score/score.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { CountdownComponent } from './countdown/countdown.component';



@NgModule({
  declarations: [
    GameComponent,
    CardComponent,
    ButtonComponent,
    BoardComponent,
    ScoreComponent,
    StartScreenComponent,
    CountdownComponent
  ],
  imports: [
    CommonModule,
    CountdownModule
  ],
  exports: [
    GameComponent
  ]
})
export class GameModule { }
