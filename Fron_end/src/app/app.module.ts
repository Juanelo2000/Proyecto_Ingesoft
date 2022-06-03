import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutinModule } from './app-routin.module';
import { CrearPreguntaComponent } from './components/crear-pregunta/crear-pregunta.component';
import { ListarPreguntasComponent } from './components/listar-preguntas/listar-preguntas.component';
import { CrearPreguntaService } from './services/generador_service';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { PreguntaAbiertaComponent } from './components/pregunta-abierta/pregunta-abierta.component';
import { PreguntaVfComponent } from './components/pregunta-vf/pregunta-vf.component';
import { PreguntaOpcionmultipleComponent } from './components/pregunta-opcionmultiple/pregunta-opcionmultiple.component';
import { ConvertirFormatoComponent } from './components/convertir-formato/convertir-formato.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearPreguntaComponent,
    ListarPreguntasComponent,
    PreguntaAbiertaComponent,
    PreguntaVfComponent,
    PreguntaOpcionmultipleComponent,
    ConvertirFormatoComponent

  ],
  imports: [
    BrowserModule,HttpClientModule,AppRoutinModule,
    FormsModule,MatInputModule,BrowserAnimationsModule,
    ReactiveFormsModule,MatSelectModule,MatDialogModule,
    CommonModule
  ],
  providers: [CrearPreguntaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
