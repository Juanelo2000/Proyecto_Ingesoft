import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pregunta } from '../models/pregunta';



@Injectable({
  providedIn: 'root'
})
export class ListarPreguntaService {

  private urlPregunta = "http://localhost:8080/generadorpreguntas/listaPreguntas"

  constructor(private http:HttpClient) {}

    getPregunta():Observable<Pregunta[]>{
      return this.http.get<Pregunta[]>(`${this.urlPregunta}`)
      
    }
   

}
