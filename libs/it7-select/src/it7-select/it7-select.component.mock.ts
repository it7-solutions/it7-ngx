import {Component, EventEmitter, Input, Output} from '@angular/core';
import {It7SelectSettings} from '../defs/it7-select-options';
import {It7SelectChoice} from '../defs/it7-select-options-choice';

@Component({
    template: '',
    selector: 'it7-select'
})
export class It7SelectMockComponent {
    @Input()
    public choices: It7SelectChoice[] = [];

    @Input()
    public itemComponent: any;

    @Input()
    public readonly: boolean;

    @Input()
    public settings: It7SelectSettings;

    @Input() public value: string;

    @Output() public valueChange = new EventEmitter<string>();
}
