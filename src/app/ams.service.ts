import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AmsService {
  myvar = "Hola Mundo, este servicio la saque de: https://desarrolloweb.com/articulos/servicios-angular.html &  https://codingpotions.com/angular-servicios-llamadas-http";
  constructor() { }
}
