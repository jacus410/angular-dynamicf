export class QuestionBase<T> {
  value: T;
  key: string;
  
  label: string;
  validate: boolean;
  order: number;
  controlType: string;
  class: string;
  etyk: string;
  style: string;
  validators: any[];

  constructor(options: {
      value?: T,
      key?: string,
      
      label?: string,
      validate?: boolean,
      order?: number,
      controlType?: string,
      class?: string,
      etyk?: string,
      style?: string,
      validators?: any,

    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
   
    this.label = options.label || '';
    this.validate = options.validate;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.class = options.class || '';
    this.etyk = options.etyk || '';
    this.style = options.style || '';
    this.validators = options.validators || '';
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/