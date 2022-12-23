import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[]=['spiderman','ironman','hulk','thor','capitan america'];
  heroeBorrado: string ='';
  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';  //esto es para decir que peude ser un string vacio  
  }
  
}
