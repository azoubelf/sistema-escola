import { Component, Input } from '@angular/core';
import { Curso } from 'src/app/Cursos';
import { CURSOS } from 'src/app/mock-cursos';

@Component({
  selector: 'app-tabela-cursos',
  templateUrl: './tabela-cursos.component.html',
  styleUrls: ['./tabela-cursos.component.css']
})
export class TabelaCursosComponent {
  cursos: Curso[] = CURSOS;
  @Input() curso: Curso;
}
