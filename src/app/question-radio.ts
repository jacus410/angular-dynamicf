import { QuestionBase } from './question-base';

export class RadioQuestion extends QuestionBase<string> {
  controlType = 'radio';
 
 
  constructor(options: {} = {}) {
    super(options);
  //  this.options = options['options'] || [];
  }
}