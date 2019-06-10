import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

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
        key: 'emailAddress2',
        label: 'Email2',
        type: 'radio',
        order: 1,
        class: 'red',
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/