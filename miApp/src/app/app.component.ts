import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, PomodoroComponent,IonicModule],
})
export class AppComponent {
  constructor() {}

}
