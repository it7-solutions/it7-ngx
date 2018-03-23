import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { It7SelectComponent } from './it7-select.component';
import { Component, DebugElement, EventEmitter, Input, Output } from '@angular/core';
import { It7SelectItemComponent } from '../it7-select-item/it7-select-item.component';
import { It7SelectChoice } from '../defs/it7-select-options-choice';
import { By } from '@angular/platform-browser';

@Component({
  template: '',
  selector: 'it7-select-item-host'
})
class It7SelectItemHostMockComponent {
  @Input() public itemComponent: It7SelectItemComponent;
  @Input() public item: It7SelectChoice;
  @Input() public readonly: boolean;
  @Output() public itemClick = new EventEmitter();
}

@Component({
  template: '',
  selector: 'it7-select-choices'
})
class It7SelectChoicesMockComponent {
  @Input() public itemComponent: It7SelectItemComponent;
  @Input() public choices: It7SelectChoice[];
  @Output() public itemSelect = new EventEmitter<It7SelectChoice>();
}

describe('It7SelectComponent', () => {
  let component: It7SelectComponent;
  let fixture: ComponentFixture<It7SelectComponent>;
  let mockItemHostElement: DebugElement;
  let mockItemHostComponent: It7SelectItemHostMockComponent;
  let mockChoicesElement: DebugElement;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [It7SelectComponent, It7SelectItemHostMockComponent, It7SelectChoicesMockComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(It7SelectComponent);
    component = fixture.componentInstance;
    component.settings = {
      readonly: false,
      choices: []
    };
    fixture.detectChanges();
    mockItemHostElement = fixture.debugElement.query(By.directive(It7SelectItemHostMockComponent));
    mockItemHostComponent = mockItemHostElement.injector.get(It7SelectItemHostMockComponent);
  });

  it('should create', () => {
    expect(!!component).toBeTruthy();
  });

  it('should display choices when click on current item', () => {
    mockChoicesElement = fixture.debugElement.query(By.directive(It7SelectChoicesMockComponent));
    expect(!!mockChoicesElement).not.toBeTruthy();

    mockItemHostComponent.itemClick.emit();
    fixture.detectChanges();

    mockChoicesElement = fixture.debugElement.query(By.directive(It7SelectChoicesMockComponent));
    expect(!!mockChoicesElement).toBeTruthy();
  });

  it('should ignore click on current item whet readonly', () => {
    mockChoicesElement = fixture.debugElement.query(By.directive(It7SelectChoicesMockComponent));

    component.readonly = true;
    fixture.detectChanges();

    mockItemHostComponent.itemClick.emit();
    fixture.detectChanges();

    mockChoicesElement = fixture.debugElement.query(By.directive(It7SelectChoicesMockComponent));
    expect(!!mockChoicesElement).not.toBeTruthy();
  });

  xit('should pass choices to child choices component', () => {});

  xit('should fire changed when fire "itemSelect" ', () => {});
});
