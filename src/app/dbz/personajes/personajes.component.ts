import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  get personajes(){
    return this.dbzService.personajes;
  }

  /**
   *tomo el servicio dbz y lo inicializo
   */
  constructor(private dbzService: dbzService) {}
 // @Input('data') personajes: Personaje[] = [];
}
