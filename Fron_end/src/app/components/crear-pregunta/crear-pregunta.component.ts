import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pregunta } from 'src/app/models/pregunta';
import { CrearPreguntaService } from 'src/app/services/crear-pregunta.service';

@Component({
  selector: 'app-crear-pregunta',
  templateUrl: './crear-pregunta.component.html',
  styleUrls: ['./crear-pregunta.component.css']
})
export class CrearPreguntaComponent implements OnInit {
  
  form:FormGroup;
  pregunta:Pregunta=new Pregunta();
  constructor(private fb:FormBuilder,private route:Router,private service:CrearPreguntaService) {
    this.form=this.fb.group({
      enunciado:['',Validators.required],
      retroalimentacion:['',Validators.required],
      materia:['',Validators.required],
      corte:['',Validators.required],

    })
   }

  ngOnInit(): void {
  }
  nuevoPregunta(){
    console.log("si")

    this.pregunta.enunciado=this.form.value.enunciado;
    
    this.service.nuevaPregunta(this.pregunta)
    .subscribe(data=>{})
    console.log(this.pregunta)
    this.form.reset

 
  }
}


  
 