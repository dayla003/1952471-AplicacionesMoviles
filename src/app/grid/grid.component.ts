import { Component, OnInit } from '@angular/core';
import { IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  standalone: true,
  styleUrls: ['./grid.component.scss'],
  imports: [IonGrid, IonRow, IonCol]
})
export class GridComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
