import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Importamos IonicModule

@Component({
  selector: 'app-pomodoro',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss'],
})
export class PomodoroComponent {
  esPomodoro: boolean = true;
  alternarVista() {
    this.esPomodoro = !this.esPomodoro;
  }
}
