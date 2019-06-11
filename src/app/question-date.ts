import { QuestionBase } from './question-base';

export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'date';
  type: string;
  class: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
