import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { ListaComponent } from '../lista/lista.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ListaComponent, IonButton],
})
export class HomePage {
  constructor() {
    console.log("AppComponent: Constructor");
  }

  ngonChanges() {
    console.log("AppComponent: OnChanges");
  }

  ngonInit() {
    console.log("AppComponent: OnInit");
  }

  ngDoCheck() {
    console.log("AppComponent: DoCheck");
  }

  ngAfterContentInit() {
    console.log("AppComponent: AfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("AppComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("AppComponent: AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("AppComponent: AfterViewChecked");
  }

  ngonDestroy() {
    console.log("AppComponent:OnDestroy");
  }

  title: string = 'Mi nueva pagina';
  
  hazmeClick(): void {
    alert("Hiciste click!");
  }

  imgUrl: string = 'https://i.redd.it/7ksiaa4exhh01.gif';

}
