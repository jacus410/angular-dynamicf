import { Component }       from '@angular/core';
import { FormGroup , FormArray, Validators } from '@angular/forms'

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';
import { RadioQuestion}  from  './question-radio';
import { CheckboxQuestion } from './question-checkbox';
import { DateQuestion } from './question-date';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form [questions]="questions"></app-dynamic-form>
    </div>
  `,
 
})
export class AppComponent {
  questions: any[];
  questions2: QuestionBase<any>[] = [

     new DropdownQuestion({
        key: 'brave',
        label: 'Bravery',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 6,
        class: 'red form-control',
        validate: true,
        validators: [Validators.required]
      }),      
      
       new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'xxxx',
        validate: true,
        order: 3,
        class: 'red form-control',
        validators: [Validators.required, Validators.minLength(5)]
      }),

       new DateQuestion({
        key: 'secondName',
        label: 'First',
     
        value: '',
        validate: true,
       
        class: 'form-control',
         validators: [Validators.required]
      }),

      
    new RadioQuestion({
        key: 'sex',
       // label: 'PŁEĆ',
     //   etyk: 'mmmm',
    //    value: 'male',
    //    required: false,
    //    order: 4
      }),

  //    new RadioQuestion({
  //      key: 'sex',
      //  label: 'PŁEĆ',
 ///       etyk: 'ffff',
 //       value: 'female',
 //       required: false,
 //       order: 5
  //    }),

 /*     new RadioQuestion({
        key: 'sex',
      //  label: 'PŁEĆ',
        etyk: '',
        value: '',
        required: false,
        order: 6,
        class: 'hide'
      }),
  */    
    new CheckboxQuestion({
        key:  'sex1',
        label: 'Sex11',
       
       
      }),
      
   new CheckboxQuestion({
        key:  'sex2',
        label: 'Sex22',
        value: 'yyy'
      }),
     
    ]

  constructor() {
    this.questions = this.questions2;
  }




}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/