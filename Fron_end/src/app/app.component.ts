import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //LO QUE HIZO MIGUEL
  title = 'Fron_end';
  outTexto='';
  outTitulo='';
  getTexto(texto:string){
    //console.warn(texto)
    this.outTexto = texto
  }
  getTitulo(titulo:string){
    //console.warn(val)
    this.outTitulo = titulo
  }
}
