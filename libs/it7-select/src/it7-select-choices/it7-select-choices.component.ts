import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { It7SelectChoice } from '../defs/it7-select-options-choice';
import { It7SelectItemComponent } from '../it7-select-item/it7-select-item.component';

@Component({
  selector: 'it7-select-choices',
  templateUrl: './it7-select-choices.component.html',
  styleUrls: ['./it7-select-choices.component.css']
})
export class It7SelectChoicesComponent implements OnInit {
  @Input() public itemComponent: It7SelectItemComponent;

  @Input() public choices: It7SelectChoice[];

  @Output() public itemSelect = new EventEmitter<It7SelectChoice>();

  constructor() {}

  ngOnInit() {}

  onItemClick(item: It7SelectChoice) {
    this.itemSelect.emit(item);
  }
}
