import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  template: '',
  selector: 'it7-input'
})
export class It7InputMockComponent {
  @Input() public value: string;

  @Output() public valueChange = new EventEmitter<string>();
}
