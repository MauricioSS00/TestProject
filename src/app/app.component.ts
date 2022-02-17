import { Component } from '@angular/core';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  questions: any[] = [
    { id: 'RU', code: 1, type: 'string', title: 'Capitulo 1: Inicio', loop: false, init: true },
    { id: 'RU', code: 1, type: 'string', title: 'Cidade', loop: false, init: false },
    { id: 'RU', code: 2, type: 'string', title: 'Sexo', loop: false, init: false },
    { id: 'RU', code: 2, type: 'string', title: 'Capitulo 2: Principal', loop: false, init: true },
    {
      id: 'RANK', code: 3, type: 'rank', title: 'Cite as 2 principais marcas', loop: false, init: false, options: [
        { id: 1, label: 'Coca Cola' },
        { id: 2, label: 'Fanta' },
        { id: 3, label: 'Doly' },
        { id: 4, label: 'Guarana' }
      ]
    },
    { id: 'RM', code: 4, type: 'string', title: 'Quais gosta?', loop: true, init: false },
    { id: 'RU', code: 5, type: 'number', title: 'Qual sua idade?', loop: false, init: false }
  ];
  questionsType = [
    { label: 'Type 1' },
    { label: 'Type 2' },
    { label: 'Type 3' },
    { label: 'Type 4' }
  ];
  structures = [
    { label: 'Structure 1' },
    { label: 'Structure 2' },
    { label: 'Structure 3' },
    { label: 'Structure 4' }
  ];
  interactionQuestions = [
    { label: 'Interaction 1' },
    { label: 'Interaction 2' },
    { label: 'Interaction 3' },
    { label: 'Interaction 4' }
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.questions, event.previousIndex, event.currentIndex);
  }

  remove(question: any) {
    this.questions.splice(this.questions.indexOf(question), 1);
  }

  removeOptionRank(questions: any[], option: any) {
    questions.splice(questions.indexOf(option), 1);
  }
}
