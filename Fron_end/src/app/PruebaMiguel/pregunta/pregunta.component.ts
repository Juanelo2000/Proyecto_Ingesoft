import { Component, OnInit } from '@angular/core';
import { Pregunta } from '../model/pregunta';
import { PreguntaService } from '../services/pregunta.service';


@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  pregunta!: Pregunta[];

  constructor(private preguntaService: PreguntaService) { }

  ngOnInit(): void {

    this.preguntaService.getPregunta().subscribe((data: Pregunta[]) => {

      this.pregunta = data;

      });

  }

}
