import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pregunta } from 'src/app/models/pregunta';
import { CrearPreguntaService } from 'src/app/services/crear-pregunta.service';
import { PreguntaAbiertaComponent } from '../pregunta-abierta/pregunta-abierta.component';
import {MatDialog} from '@angular/material/dialog';
import { PreguntaVfComponent } from '../pregunta-vf/pregunta-vf.component';


@Component({
  selector: 'app-crear-pregunta',
  templateUrl: './crear-pregunta.component.html',
  styleUrls: ['./crear-pregunta.component.css']
})
export class CrearPreguntaComponent implements OnInit {
  
  form:FormGroup;
  pregunta:Pregunta=new Pregunta();
  constructor(public dialog:MatDialog ,private fb:FormBuilder,private route:Router,private service:CrearPreguntaService) {
    this.form=this.fb.group({
      enunciado:['',Validators.required],
      retroalimentacion:['',Validators.required],
      materia:['',Validators.required],
      corte:['',Validators.required],
      tipo:['',Validators.required]

    })
   }

  ngOnInit(): void {
  }

  openDialog() {
   
    if(this.form.value.tipo=="abierta"){
      console.log(this.form.value.tipo)
      this.dialog.open(PreguntaAbiertaComponent);
    }

    if(this.form.value.tipo == "vyf"){
      this.dialog.open(PreguntaVfComponent)
    }
  }

}


  
 