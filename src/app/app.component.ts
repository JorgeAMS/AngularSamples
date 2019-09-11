//https://angular-maps.com/guides/getting-started/


import { Component } from '@angular/core';
import { AmsService } from '../app/ams.service';

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
    {activo: true, nombre: 'Colombia'},
    {activo: false, nombre: 'Brasil'},
    {activo: true, nombre: 'Argentina'},
    {activo: false, nombre: 'Polonia'},
    {activo: true, nombre: 'Alemania'},
    {activo: true, nombre: 'Francia'},
  ]


  constructor(private amsService: AmsService){
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
