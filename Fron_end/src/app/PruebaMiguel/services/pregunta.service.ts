import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pregunta } from '../model/pregunta';


@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  private urlPregunta = "http://localhost:8080/generadorpreguntas/listaPreguntas"
  private urlPost = "http://localhost:8080/generadorpreguntas/guardarPregunta"

  constructor(private http:HttpClient) {}

    getPregunta():Observable<Pregunta[]>{
      return this.http.get<Pregunta[]>(`${this.urlPregunta}`)
      
    }

    create(pregunta: any): Observable<any> {
      return this.http.post(this.urlPost, pregunta);
    }


   

}
