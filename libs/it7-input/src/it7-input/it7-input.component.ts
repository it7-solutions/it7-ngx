import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'it7-input',
  templateUrl: './it7-input.component.html',
  styleUrls: ['./it7-input.component.css']
})
export class It7InputComponent implements OnInit {
  @Input() public value: string;

  @Output() public valueChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  public onChange(newValue: string) {
    this.valueChange.emit(newValue);
  }
}
