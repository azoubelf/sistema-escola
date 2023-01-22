import { Component, Input } from '@angular/core';
import { Curso } from 'src/app/Cursos';
import { CURSOS } from 'src/app/mock-cursos';

@Component({
  selector: 'app-item-curso',
  templateUrl: './item-curso.component.html',
  styleUrls: ['./item-curso.component.css']
})
export class ItemCursoComponent {
  @Input() curso: Curso;
}
