import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pregunta } from './pregunta';
@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
  private url= "http://localhost:8080/generadorpreguntas/crearpregunta"
  constructor(private http:HttpClient) { }

  getAll(): Observable<Pregunta[]> {
    return this.http.get<Pregunta[]>(this.url);
  }
}
