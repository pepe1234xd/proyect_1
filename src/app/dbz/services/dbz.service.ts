import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class dbzService{

    personajes:Personaje[] = [
        {
          nombre: 'goku',
          poder: 15000
        },
        {
          nombre: 'vegueta',
          poder: 13000
        }
      ];
      
    constructor(){
        console.log('servicio bien bonito');
    }
}