import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  template: '',
  selector: 'it7-checkbox'
})
export class It7CheckboxMockComponent {
  @Input() public readonly: boolean;

  @Input() public value: boolean;

  @Output() public valueChange = new EventEmitter<boolean>();
}
