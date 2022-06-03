import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Materia } from 'src/app/models/materia';
import { Pregunta } from 'src/app/models/pregunta';
import { CrearPreguntaService } from 'src/app/services/crear-pregunta.service';


@Component({
  selector: 'app-pregunta-abierta',
  templateUrl: './pregunta-abierta.component.html',
  styleUrls: ['./pregunta-abierta.component.css']
})
export class PreguntaAbiertaComponent implements OnInit {
  form:FormGroup;
  pregunta:Pregunta=new Pregunta();
  preguntas: Array<Pregunta>=new Array();
  materias: Array<Materia>=new Array();
  
  constructor(public dialog: MatDialog,private fb:FormBuilder,private route:Router,private service:CrearPreguntaService) {
    this.form=this.fb.group({
      materia:['',Validators.required],
      titulo:['',Validators.required],
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

    this.pregunta.materia=this.form.value.materia
    this.pregunta.titulo=this.form.value.titulo
    this.pregunta.descripcion=this.form.value.descripcion
    this.pregunta.retroalimentacion=this.form.value.retroalimentacion
    this.pregunta.corte=this.form.value.corte
    this.pregunta.tipo="abierta"
    this.service.getPregunta()
    .subscribe(data=>{
      this.preguntas=data;
     })
    this.service.nuevaPregunta(this.pregunta)
    .subscribe(data=>{})
    console.log(this.pregunta)
    this.form.reset()

 
  }
 cerrar(){
 }
    }

