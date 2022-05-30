import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-score',
  templateUrl: './dialog-score.component.html',
  styleUrls: ['./dialog-score.component.scss']
})
export class DialogScoreComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogScoreComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data: {
      player: string,
      time: number,
      moves: number,
      matches: number,
      generation: string
    }
    ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
