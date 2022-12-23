import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() nuevo: Personaje ={
    nombre:'',
    poder:0
  }

  constructor(private dbzService: dbzService){}
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){return;}
    //this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
        nombre: '',
        poder:0
      };       
  }
}
