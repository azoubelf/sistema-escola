import { Component, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incluir-form',
  templateUrl: './incluir-form.component.html',
  styleUrls: ['./incluir-form.component.css']
})

export class IncluirFormComponent {
  @Output() onAddTask: EventEmitter<any> = new EventEmitter();

  nome: string | undefined;
  instrutor: string | undefined;
  local: string | undefined;
  cargaHoraria: string | undefined;
  dataInicio: string | undefined;

  constructor(private el: ElementRef) { }


  onSubmit() {

    const novoCurso: any = {
      nome: this.nome,
      instrutor: this.instrutor,
      local: this.local,
      cargaHoraria: this.cargaHoraria,
      dataInicio: this.dataInicio
    }

    this.onAddTask.emit(novoCurso);

    let erro = this.el.nativeElement.querySelector('.erro');
    let sucesso = this.el.nativeElement.querySelector('.sucesso');

    if ((novoCurso.nome === undefined) ||
      (novoCurso.instrutor === undefined) ||
      (novoCurso.local === undefined) ||
      (novoCurso.cargaHoraria === undefined) ||
      (novoCurso.dataInicio === undefined)
    ) {
      if (erro.classList.contains('invisivel')) {
        erro.classList.remove('invisivel');
        sucesso.classList.add('invisivel')
      }
    }

    if (
      (novoCurso.nome != undefined) &&
      (novoCurso.instrutor != undefined) &&
      (novoCurso.local != undefined) &&
      (novoCurso.cargaHoraria != undefined) &&
      (novoCurso.dataInicio !== undefined)
    ) {
      erro.classList.add('invisivel');
      sucesso.classList.remove('invisivel');

      this.nome = undefined;
      this.instrutor = undefined;
      this.local = undefined;
      this.cargaHoraria = undefined;
      this.dataInicio = undefined;
    }
  }
}
