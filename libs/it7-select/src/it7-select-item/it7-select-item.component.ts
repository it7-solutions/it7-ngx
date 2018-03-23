import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { It7SelectChoice } from '../defs/it7-select-options-choice';

@Component({
  selector: 'it7-select-item',
  templateUrl: './it7-select-item.component.html',
  styleUrls: ['./it7-select-item.component.css']
})
export class It7SelectItemComponent implements OnInit {
  @Input() public item: It7SelectChoice;

  @Input() public readonly: boolean;

  @Output() public itemClick = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public onClick() {
    if (!this.readonly) {
      this.itemClick.emit();
    }
  }
}
