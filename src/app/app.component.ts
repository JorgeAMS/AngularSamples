//https://angular-maps.com/guides/getting-started/


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jorge\'s App';
  lat = 4.607;
  lng = -74.1024516;
  var2='Jorge Morales';
  var3=19;
  habilitacion=false;
  nombre:string = '';

  paises:any = [
    {cercano:1, activo: true, nombre: 'Colombia'},
    {cercano:2, activo: false, nombre: 'Brasil'},
    {cercano:2, activo: true, nombre: 'Argentina'},
    {cercano:3, activo: false, nombre: 'Polonia'},
    {cercano:3, activo: true, nombre: 'Alemania'},
    {cercano:3, activo: true, nombre: 'Francia'},
  ]


  constructor(){
    this.cons();
  }

  cons(){
    this.habilitacion=!this.habilitacion;
    setTimeout(() => {
      this.habilitacion = !this.habilitacion;
    }, 3000)
  }

  ejecutar(){
    this.var3=this.var3+1;
  }

  restart(){
    this.cons();
    this.var3=19;
  }

}
