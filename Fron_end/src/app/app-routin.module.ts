import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPreguntaComponent } from './components/crear-pregunta/crear-pregunta.component';
import { ListarPreguntasComponent } from './components/listar-preguntas/listar-preguntas.component';
import { PreguntaAbiertaComponent } from './components/pregunta-abierta/pregunta-abierta.component';
import { PreguntaComponent } from './PruebaMiguel/pregunta/pregunta.component';


const routes: Routes = [
  {path:'crear', component: CrearPreguntaComponent},
  {path:'listar', component: ListarPreguntasComponent},
  {path: 'pregunta', component: PreguntaComponent},
  {path: 'pregunta-abierta', component: PreguntaAbiertaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutinModule { }



