import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  
  heroes : string[] = ['batman', 'ironman','gohstrider','personaje','personaje2'];
  heroeborrado : string = '';

  borrarHeroe(){
    const heroeborrado = this.heroes.shift() || '';
    console.log(heroeborrado);
    this.heroeborrado = heroeborrado;
    return heroeborrado;

  }
}
