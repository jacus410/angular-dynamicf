import { QuestionBase } from './question-base';

export class CheckboxQuestion extends QuestionBase<string> {
  controlType = 'checkbox';
 // type: string;
 //  class: string;
//  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
  //  this.options = options['options'] || [];
  }
}