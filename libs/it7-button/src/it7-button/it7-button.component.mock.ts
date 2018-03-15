import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    template: '',
    selector: 'it7-button'
})
export class It7ButtonMockComponent {
    @Input()
    public disabled: boolean;

    @Output()
    public itClick = new EventEmitter();
}
