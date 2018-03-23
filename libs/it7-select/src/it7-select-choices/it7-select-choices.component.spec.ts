import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { It7SelectChoicesComponent } from './it7-select-choices.component';
import { Component, DebugElement, Directive, EventEmitter, Input, Output } from '@angular/core';
import { It7SelectSettings } from '../defs/it7-select-options';
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
  selector: 'it7-select-item'
})
class It7SelectItemMockComponent {}

describe('It7SelectChoicesComponent', () => {
  let component: It7SelectChoicesComponent;
  let fixture: ComponentFixture<It7SelectChoicesComponent>;
  let mockItemHostElement: DebugElement;
  let mockItemHostComponent: It7SelectItemHostMockComponent;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [It7SelectChoicesComponent, It7SelectItemHostMockComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(It7SelectChoicesComponent);
    component = fixture.componentInstance;
    component.itemComponent = It7SelectItemMockComponent as any;
    component.choices = [
      { input: '1', output: 'One', selected: false, disabled: false },
      { input: '2', output: 'Two', selected: false, disabled: false },
      { input: '3', output: 'Three', selected: false, disabled: false }
    ];

    fixture.detectChanges();
    mockItemHostElement = fixture.debugElement.query(By.directive(It7SelectItemHostMockComponent));
    mockItemHostComponent = mockItemHostElement.injector.get(It7SelectItemHostMockComponent);
  });

  it('should create', () => {
    expect(!!component).toBeTruthy();
  });

  it('should create children item-host components by "choices"', () => {
    const mockElements = fixture.debugElement.queryAll(By.directive(It7SelectItemHostMockComponent));
    expect(mockElements.length).toBe(component.choices.length);
  });

  it('should pass choices to children as "item"', () => {
    const mockElements = fixture.debugElement.queryAll(By.directive(It7SelectItemHostMockComponent));
    const mockComponentItem = mockElements[0].injector.get(It7SelectItemHostMockComponent).item;
    expect(mockComponentItem).toBe(component.choices[0]);
  });

  it('should pass "itemComponent" to children', () => {
    expect(component.itemComponent).toBe(mockItemHostComponent.itemComponent);
  });

  it('should fire itemSelect to parent when child fire itemClick', () => {
    const item = component.choices[0];
    let selected;

    component.itemSelect.subscribe(i => (selected = i));
    mockItemHostComponent.itemClick.emit();

    expect(selected).toBe(item);
  });
});
