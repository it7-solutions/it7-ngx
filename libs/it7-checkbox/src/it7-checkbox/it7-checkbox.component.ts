import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'it7-checkbox',
  templateUrl: './it7-checkbox.component.html',
  styleUrls: ['./it7-checkbox.component.css']
})
export class It7CheckboxComponent implements OnInit {
  @Input() public readonly: boolean;

  @Input() public value: boolean;

  @Output() public valueChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  @HostListener('click')
  public onClick() {
    if (!this.readonly) {
      this.valueChange.emit(!this.value);
    }
  }
}
