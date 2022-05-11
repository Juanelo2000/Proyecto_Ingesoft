import { Component, OnInit } from '@angular/core';
import { Pregunta } from './pregunta';
import { PreguntaService } from './pregunta.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {
  preguntas: Pregunta[] = [];
  constructor(private preguntaService:PreguntaService) { }

  ngOnInit(): void {
    this.preguntaService.getAll().subscribe((data:Pregunta[])=> {
      this.preguntas=data;
    });
  }
    

}
