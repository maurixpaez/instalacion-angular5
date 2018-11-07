import { Component } from '@angular/core';

@Component({
        selector: 'videojuegos',
        template: ` 
        <h2>Componente de {{ nombre }} </h2>
        <h3 *ngIf="mostrar_retro != true">El mejor juego es : {{ mejor_juego }}</h3>
        <h3 [style.background]="color" *ngIf="mostrar_retro">El mejor juego retro es : {{ mejor_juego_retro }}</h3>

        <h3>Listado de Juegos</h3>
        <ul>
            <li *ngFor="let game of videojuegos">{{ game }}</li>
        </ul>
        `             
})
export class VideojuegosComponent{
    public nombre = 'Videojuegos 2018';
    public mejor_juego = 'Call of Duty';
    public mejor_juego_retro = 'Super Mario 64';
    public mostrar_retro = true;
    public color = "yellow";

    public videojuegos = [
        'Los simpson hit and run',
        'Assasin creed',
        'GTA 5',
        'Call of Duty',
        'Tekken'
    ]
}