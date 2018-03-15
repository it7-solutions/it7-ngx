import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'it7-button',
    templateUrl: './it7-button.component.html',
    styleUrls: ['./it7-button.component.css']
})
export class It7ButtonComponent implements OnInit {
    @Input()
    public disabled: boolean;

    @Output()
    public itClick = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    @HostListener('click')
    onClick() {
        if (!this.disabled) {
            this.itClick.emit();
        }
    }
}
