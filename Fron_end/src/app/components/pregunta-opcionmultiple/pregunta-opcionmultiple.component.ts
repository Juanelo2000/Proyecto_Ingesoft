import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Materia } from 'src/app/models/materia';
import { Pregunta } from 'src/app/models/pregunta';
import { CrearPreguntaService } from 'src/app/services/crear-pregunta.service';

@Component({
  selector: 'app-pregunta-opcionmultiple',
  templateUrl: './pregunta-opcionmultiple.component.html',
  styleUrls: ['./pregunta-opcionmultiple.component.css']
})
export class PreguntaOpcionmultipleComponent implements OnInit {

  form:FormGroup;
  pregunta:Pregunta=new Pregunta();
  preguntas: Array<Pregunta>=new Array();
  respuesta: Array<string>=new Array();
  materias: Array<Materia>=new Array();
  
  constructor(public dialog: MatDialog,private fb:FormBuilder,private route:Router,private service:CrearPreguntaService) {
    this.form=this.fb.group({

      materia:['',Validators.required],
      titulo:['',Validators.required],
      respuesta1:['',Validators.required],
      respuesta2:['',Validators.required],
      respuesta3:['',Validators.required],
      respuesta4:['',Validators.required],
      descripcion:['',Validators.required],
      retroalimentacion:['',Validators.required],
      corte:['',Validators.required]

    })

    this.materias= new Array()
    this.service.getMaterias().subscribe(data=>{

      this.materias=data;

    })
    
   }
   ngOnInit(): void {
  }
  nuevoPregunta(){
    console.log("si")

    this.respuesta = new Array();

    this.pregunta.materia=this.form.value.materia
    this.pregunta.titulo=this.form.value.titulo
    this.respuesta.push(this.form.value.respuesta1)
    this.respuesta.push(this.form.value.respuesta2)
    this.respuesta.push(this.form.value.respuesta3)
    this.respuesta.push(this.form.value.respuesta4)

    this.pregunta.respuestas= this.respuesta
    this.pregunta.descripcion=this.form.value.descripcion
    this.pregunta.retroalimentacion=this.form.value.retroalimentacion
    this.pregunta.corte=this.form.value.corte
    this.pregunta.tipo="opcion multiple"
   
    this.service.getPregunta()
    .subscribe(data=>{
      this.preguntas=data;
     })
    this.service.nuevaPregunta(this.pregunta)
    .subscribe(data=>{})
    console.log(this.pregunta)
    this.form.reset

 
  }
 cerrar(){
 }
}
