import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Materia } from 'src/app/models/materia';
import { Pregunta } from 'src/app/models/pregunta';
import { CrearPreguntaService } from 'src/app/services/crear-pregunta.service';

@Component({
  selector: 'app-pregunta-vf',
  templateUrl: './pregunta-vf.component.html',
  styleUrls: ['./pregunta-vf.component.css']
})
export class PreguntaVfComponent implements OnInit {
  form:FormGroup;
  pregunta:Pregunta=new Pregunta();
  preguntas: Array<Pregunta>=new Array();
  respuestas: Array<String>=new Array();
  materias: Array<Materia>=new Array();
  
  constructor(public dialog: MatDialog,private fb:FormBuilder,private route:Router,private service:CrearPreguntaService) {
    this.form=this.fb.group({
      materia:['',Validators.required],
      tipo:['',Validators.required],
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


    this.pregunta.materia=this.form.value.materia
    this.respuestas.pop()
    this.respuestas.push(this.form.value.tipo)
    this.pregunta.respuestas=this.respuestas
    this.pregunta.descripcion=this.form.value.descripcion
    this.pregunta.retroalimentacion=this.form.value.retroalimentacion
    this.pregunta.corte=this.form.value.corte
    this.pregunta.tipo="verdadero y falso"

    this.service.getPregunta()
    .subscribe(data=>{
      this.preguntas=data;
      
     })
    this.service.nuevaPregunta(this.pregunta)
    .subscribe(data=>{})
    console.log(this.pregunta)
    this.form.reset

 
  }

    }
