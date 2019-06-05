import { Component }       from '@angular/core';
import { QuestionBase } from './question-base';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form [questions]="questions"></app-dynamic-form>
    </div>
  `,
  providers:  [QuestionService]
})
export class AppComponent {
  questions: any[];
  questions2: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 4
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name2',
        value: 'Bombasto',
        required: true,
        order: 5,
        class: 'red',
      }),

     new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 6
      }),      
      
       new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 3,
        class: 'red',
      }),

       new TextboxQuestion({
        key: 'secondName',
        label: 'First',
        type: 'number',
        value: 1,
        required: false,
        order: 2,
        class: 'red'
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'radio',
        order: 1,
        class: 'red',
      })
    ]

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }




}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/