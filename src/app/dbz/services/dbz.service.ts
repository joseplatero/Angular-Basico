import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()

export class DbzService{

    private _personajes: Personaje[] = [
        {
          nombre: 'goku',
          poder: 15000
        },
        {
          nombre: 'vegeta',
          poder: 1000
        }
    
      ];

    get Personaje(): Personaje []{
        return [...this._personajes];
    }
      
    constructor(){

    }


    agregarPersonaje(personaje : Personaje){
      this._personajes.push( personaje ); 
    }

}