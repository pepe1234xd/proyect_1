import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

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

  nuevo:Personaje={
    nombre: 'maestro roshi',
    poder:9000
  }
  agregarNuevoPersonaje(argumento:Personaje){
    this.personajes.push(argumento);
  }

  constructor(private dbzService: dbzService){}

}
