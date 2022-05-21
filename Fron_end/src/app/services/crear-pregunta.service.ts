import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pregunta } from '../models/pregunta';
@Injectable({
  providedIn: 'root'
})
export class CrearPreguntaService {
  private url= "http://localhost:8080/generadorpreguntas/Customers"
  constructor(private http:HttpClient) { }

  nuevaPregunta(pregunta:Pregunta){
    console.log("AQUI ES EL ERROR")
    return this.http.post<Pregunta>(this.url,pregunta)
  }
}