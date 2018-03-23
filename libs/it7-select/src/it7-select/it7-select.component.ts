import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {It7SelectSettings} from '../defs/it7-select-options';
import {It7SelectChoice} from '../defs/it7-select-options-choice';

@Component({
    selector: 'it7-select',
    templateUrl: './it7-select.component.html',
    styleUrls: ['./it7-select.component.css']
})
export class It7SelectComponent implements OnInit, OnChanges {
    @Input()
    public choices: It7SelectChoice[] = [];

    @Input()
    public itemComponent: any;

    @Input()
    public readonly: boolean;

    @Input()
    public settings: It7SelectSettings;

    @Input()
    public set value(newValue: string) {
        this.onSetValue(newValue);
    }

    @Output() public valueChange = new EventEmitter<string>();

    public showChoices = false;

    public currentChoice: It7SelectChoice;

    private _value: string;
    private initialized = false;

    constructor() {
    }

    ngOnInit() {
        this.initialized = true;
        this.refreshControl();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['settings'] || changes['choices']) {
            this.refreshControl();
        }
    }

    public onItemClick() {
        if (!this.readonly) {
            this.showChoices = !this.showChoices;
        }
    }

    public onItemSelect(item: It7SelectChoice) {
        this.showChoices = false;
        this.updateValue(item.input);
    }

    private onSetValue(newValue: string) {
        if (this._value !== newValue) {
            this._value = newValue;
            if (this.initialized) {
                this.setChoice();
            }
        }
    }

    private updateValue(newValue: string) {
        this.valueChange.emit(newValue);
    }

    private refreshControl() {
        this.mergeSettings();
        if (this.readonly) {
            this.showChoices = false;
        }
        this.setChoice();
    }

    private setChoice() {
        this.choices.forEach(c => {
            c.selected = false;
        });
        const choice = this.findChoiceByInput(this._value);
        this.currentChoice = choice ? choice : new It7SelectChoice('', 'Value outside the list!');
        this.currentChoice.selected = true;
    }

    private findChoiceByInput(value: string) {
        return this.choices.find(ch => {
            return ch.input === value;
        });
    }

    private mergeSettings() {
        if (this.settings && this.settings.choices) {
            this.choices = this.settings.choices;
        }
        if (this.settings && this.settings.readonly !== undefined) {
            this.readonly = this.settings.readonly;
        }
        if (this.settings && this.settings.itemComponent) {
            this.itemComponent = this.settings.itemComponent;
        }
    }
}
