import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ListaComponent implements OnInit {
  constructor() { }
  verdadero: boolean = false;
  ngOnInit() {}
  

}
