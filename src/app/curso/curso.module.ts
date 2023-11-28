import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoComponent } from './curso.component';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
import { DetalleCursoComponent } from './detalle-curso/detalle-curso.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CursoComponent,ListarCursosComponent,DetalleCursoComponent],
  exports: [CursoComponent,ListarCursosComponent,DetalleCursoComponent]
})
export class CursoModule { }
