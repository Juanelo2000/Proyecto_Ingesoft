import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/models/pregunta';
import { ListarPreguntaService } from 'src/app/services/listar-pregunta.service';

@Component({
  selector: 'app-listar-preguntas',
  templateUrl: './listar-preguntas.component.html',
  styleUrls: ['./listar-preguntas.component.css']
})

export class ListarPreguntasComponent implements OnInit {

  listarpregunta!: Pregunta[];

  constructor(private preguntaService: ListarPreguntaService) { }

  ngOnInit(): void {

    this.preguntaService.getPregunta().subscribe((data: Pregunta[]) => {

      this.listarpregunta = data;

      });

  }

  preguntaSeleccionada(){
    
    console.log(this.listarpregunta)
  }
  

}