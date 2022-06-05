import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Pregunta } from 'src/app/models/pregunta';
import { CrearPreguntaService } from 'src/app/services/generador_service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';


@Component({
  selector: 'app-listar-preguntas',
  templateUrl: './listar-preguntas.component.html',
  styleUrls: ['./listar-preguntas.component.css']
})

export class ListarPreguntasComponent implements OnInit {

  listarpregunta!: Pregunta[];
  constructor(private preguntaService: CrearPreguntaService,private route:Router) { }

  ngOnInit(): void {

    this.preguntaService.getPregunta().subscribe((data: Pregunta[]) => {

      this.listarpregunta = data;

      });

  }

  
  preguntaSeleccionada(){
    console.log(this.listarpregunta)
  }
  generarFormato(){
    this.route.navigate(['convertir'])
  }
  
}

