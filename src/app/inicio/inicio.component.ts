import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  constructor() {}

  variable = 'Hola Mundo desde Typescript';
  contador = 0;
  verParrafo = false;
  // generar una lista de elementos de texto
  lista = Array.from(Array(5)).map((_, idx) => ({
    title: `Elemento #${idx + 1}`,
    description: `Description #${idx + 1}`,
  }));
  incrementar() {
    this.contador++;
  }
  ngOnInit(): void {}
}
