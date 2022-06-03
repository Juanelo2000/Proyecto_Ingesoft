import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertirFormatoComponent } from './components/convertir-formato/convertir-formato.component';
import { CrearPreguntaComponent } from './components/crear-pregunta/crear-pregunta.component';
import { ListarPreguntasComponent } from './components/listar-preguntas/listar-preguntas.component';
import { PreguntaAbiertaComponent } from './components/pregunta-abierta/pregunta-abierta.component';



const routes: Routes = [
  {path:'crear', component: CrearPreguntaComponent},
  {path:'listar', component: ListarPreguntasComponent},
  {path: 'convertir', component: ConvertirFormatoComponent}, 
  {path: 'pregunta-abierta', component: PreguntaAbiertaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutinModule { }



