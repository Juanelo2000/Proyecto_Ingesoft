
import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/models/pregunta';
import { CrearPreguntaService } from 'src/app/services/generador_service';

@Component({
  selector: 'app-convertir-formato',
  templateUrl: './convertir-formato.component.html',
  styleUrls: ['./convertir-formato.component.css']
})
export class ConvertirFormatoComponent implements OnInit {
formato!:string;
preguntas_seleccionadas: Array<Pregunta>=new Array();
preguntas: Array<Pregunta>=new Array();
  constructor(private service:CrearPreguntaService) { }
  convertidos:Array<string>=new Array();


  ngOnInit(): void {
 this.Mostrar()

  }

Mostrar(){
  this.convertidos=new Array()
  this.service.getPregunta().subscribe(
    data=>{
      this.preguntas=data;
      console.log(this.preguntas)

      for (let i = 0; i < this.preguntas.length; i++) {
        this.formato=""
        if(this.preguntas[i].tipo=="abierta"){
          this.formato=this.formato+"::"+"Q"+i+"::"+" "+this.preguntas[i].descripcion+" "+"{}"+"# "+this.preguntas[i].retroalimentacion+ "\t"
        }
        if(this.preguntas[i].tipo=="vyf"){
          this.formato=this.formato+"::"+"Q"+i+"::"+" "+this.preguntas[i].descripcion+" "
         if(this.preguntas[i].respuestas[0]=="falso"){
            this.formato=this.formato+"{F} "+"# "+this.preguntas[i].retroalimentacion
          }
          if(this.preguntas[i].respuestas[0]=="verdadero"){
            console.log("entra")
            this.formato=this.formato+"{T} "+"# "+this.preguntas[i].retroalimentacion
          }
        }
        if(this.preguntas[i].tipo=="multiple"){
          this.formato=this.formato+"::"+"Q"+i+"::"+" "+this.preguntas[i].descripcion+" "+"{ ="+this.preguntas[i].respuestas[0]+"# "+this.preguntas[i].retroalimentacion+" ~"+this.preguntas[i].respuestas[1]+" ~"+this.preguntas[i].respuestas[2]+" ~"+this.preguntas[i].respuestas[3]+"} "

        
      }
      this.convertidos.push(this.formato);
    }
    console.log(this.convertidos)
  }
  )
}

exportar(){
  const a = document.createElement("a");
  const contenido = this.convertir(),
      blob = new Blob([contenido], {type: "octet/stream"}),
      url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = "Examen_generado.txt";
  a.click();
  window.URL.revokeObjectURL(url);
  
  };
convertir(){
  let cuerpo="";
    for (let i = 0; i< this.convertidos.length; i++) {
    cuerpo =cuerpo+this.convertidos[i]};
     
    
    return cuerpo;
  }
}
  /*
filtrar(){
  this.preguntas_seleccionadas=new Array();
  this.preguntas=new Array();
  this.service.getPregunta().subscribe(data=>{
    this.preguntas=data;
    
    for (let index = 0; index < this.preguntas.length; index++) {
      if(this.preguntas[index].select==true){
        this.preguntas_seleccionadas.push(this.preguntas[index])
      }
      
    }
    console.log(this.preguntas_seleccionadas)
  })
}

*/

