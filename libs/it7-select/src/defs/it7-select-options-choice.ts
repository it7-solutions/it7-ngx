export class It7SelectChoice {
  input = '';
  output = 'Empty';
  selected? = false;
  disabled? = false;

  extra?: { [propName: string]: any } = {};

  constructor(input: string, output: string, selected = false, disabled = false, extra = {}) {
    this.input = input;
    this.output = output;
    this.selected = selected;
    this.disabled = disabled;
    this.extra = extra;
  }
}
