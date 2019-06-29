import { QuestionBase } from './question-base';

export class RadioQuestion extends QuestionBase<string> {
  controlType = 'radio';
  etyk: string;

  constructor(options: {} = {}) {
    super(options);
  //   this.options = options['options'] || [];
  }
}