import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestInterfaceService {

  printToConsole(arg: any){
    console.log(arg);
  }

  constructor() { }
}
