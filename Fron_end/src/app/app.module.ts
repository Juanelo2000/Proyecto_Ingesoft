import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutinModule } from './app-routin.module';
import { CrearPreguntaComponent } from './components/crear-pregunta/crear-pregunta.component';
import { ListarPreguntasComponent } from './components/listar-preguntas/listar-preguntas.component';
import { CrearPreguntaService } from './services/crear-pregunta.service';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    CrearPreguntaComponent,
    ListarPreguntasComponent
   
  ],
  imports: [
    BrowserModule,HttpClientModule, AppRoutinModule,FormsModule,MatInputModule,BrowserAnimationsModule,
    ReactiveFormsModule,MatSelectModule
  ],
  providers: [CrearPreguntaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
