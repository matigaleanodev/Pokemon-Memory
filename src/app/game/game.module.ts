import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownModule } from 'ngx-countdown';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { GameComponent } from './game.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { BoardComponent } from './board/board.component';
import { ScoreComponent } from './score/score.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { CountdownComponent } from './countdown/countdown.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    GameComponent,
    CardComponent,
    ButtonComponent,
    BoardComponent,
    ScoreComponent,
    StartScreenComponent,
    CountdownComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    CountdownModule,
    FontAwesomeModule
  ],
  exports: [
    GameComponent
  ]
})
export class GameModule { }
