import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class dbzService{
//propiedades
    private _personajes:Personaje[] = [
        {
          nombre: 'goku',
          poder: 15000
        },
        {
          nombre: 'vegueta',
          poder: 13000
        }
      ];
//getters and setters
    get personajes():Personaje[]{
        return [...this._personajes];
    }
//constructor
    constructor(){}
//metodos
    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }
}