import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {It7ButtonComponent} from './it7-button.component';

describe('It7ButtonComponent', () => {
    let component: It7ButtonComponent;
    let fixture: ComponentFixture<It7ButtonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [It7ButtonComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(It7ButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(!!component).toBeTruthy();
    });

    xit('should display ng-content', () => {
    });

    xit('should fire "itClick" when click', () => {
    });

    xit('should ignore click when disabled', () => {
    });

    xit('should set css-class "disabled" when disabled', () => {
    });

});
