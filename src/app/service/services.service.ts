import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  holamundo(){
    console.log('hola mundo')
  }
}
