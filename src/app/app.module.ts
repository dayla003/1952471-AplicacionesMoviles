import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component'; // Ajusta según la ubicación de tu componente

@NgModule({
  declarations: [
    AppComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }