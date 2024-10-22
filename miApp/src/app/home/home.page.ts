import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PomodoroComponent } from '../pomodoro/pomodoro.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, PomodoroComponent]
  
})
export class HomePage {
  constructor() {}

}
