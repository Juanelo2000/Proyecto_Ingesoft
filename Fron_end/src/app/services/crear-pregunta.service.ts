import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pregunta } from '../models/pregunta';
import { Materia } from '../models/materia';
@Injectable({
  providedIn: 'root'
})
export class CrearPreguntaService {
  private url= "http://localhost:8080/generadorpreguntas"
  constructor(private http:HttpClient) { }

  nuevaPregunta(pregunta:Pregunta){
    
    console.log("AQUI ES EL ERROR")
    return this.http.post<Pregunta>(this.url+"/guardarPregunta",pregunta)
  }
  getPregunta():Observable<Pregunta[]>{
    return this.http.get<Pregunta[]>(`${this.url+"/listaPreguntas"}`)
    
  }

  getMaterias():Observable<Materia[]>{
    return this.http.get<Materia[]>(`${this.url+"/listaMaterias"}`)
    
  }

}