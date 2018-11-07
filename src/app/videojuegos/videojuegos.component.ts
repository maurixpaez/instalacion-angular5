import { Component } from '@angular/core';

@Component({
        selector: 'videojuegos',
        templateUrl: 'videojuegos.component.html'          
})
export class VideojuegosComponent{
    public nombre:string = 'Videojuegos 2018';
    public mejor_juego:string = 'Call of Duty';
    public mejor_juego_retro:string = 'Super Mario 64';
    public mostrar_retro:boolean = true;
    public color:string = "yellow";
    public year:number = 2018

    public videojuegos:Array<string> = [
        'Los simpson hit and run',
        'Assasin creed',
        'GTA 5',
        'Call of Duty',
        'Tekken'
    ]
}