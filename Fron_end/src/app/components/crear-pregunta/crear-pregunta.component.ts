import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pregunta } from 'src/app/models/pregunta';
import { CrearPreguntaService } from 'src/app/services/generador_service';
import { PreguntaAbiertaComponent } from '../pregunta-abierta/pregunta-abierta.component';
import {MatDialog} from '@angular/material/dialog';
import { PreguntaVfComponent } from '../pregunta-vf/pregunta-vf.component';
import { PreguntaOpcionmultipleComponent } from '../pregunta-opcionmultiple/pregunta-opcionmultiple.component';


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
      tipo:['',Validators.required]

    })
   }

  ngOnInit(): void {
  }

  openDialog() {
   
    if(this.form.value.tipo=="abierta"){
      this.dialog.open(PreguntaAbiertaComponent);
    }
    if(this.form.value.tipo=="vyf"){
      this.dialog.open(PreguntaVfComponent)
    }
    if(this.form.value.tipo=="multiple"){
      this.dialog.open(PreguntaOpcionmultipleComponent)
    }
  }

}


  
 