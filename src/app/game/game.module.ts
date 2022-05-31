import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';


import { GameComponent } from './game.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { BoardComponent } from './board/board.component';
import { ScoreComponent } from './score/score.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { AboutComponent } from './about/about.component';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { EndScreenComponent } from './end-screen/end-screen.component';
import { ShareButtonsComponent } from './share-buttons/share-buttons.component';



@NgModule({
  declarations: [
    GameComponent,
    CardComponent,
    ButtonComponent,
    BoardComponent,
    ScoreComponent,
    StartScreenComponent,
    AboutComponent,
    PlayerProfileComponent,
    EndScreenComponent,
    ShareButtonsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ShareButtonsModule
  ],
  exports: [
    GameComponent
  ]
})
export class GameModule { }
