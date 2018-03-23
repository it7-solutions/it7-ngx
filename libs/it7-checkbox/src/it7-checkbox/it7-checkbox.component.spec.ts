import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { It7CheckboxComponent } from './it7-checkbox.component';
import { By } from '@angular/platform-browser';

describe('It7CheckboxComponent', () => {
  let component: It7CheckboxComponent;
  let fixture: ComponentFixture<It7CheckboxComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [It7CheckboxComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(It7CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(!!component).toBeTruthy();
  });

  it('should set css-class "checked" only when value truthy', () => {
    component.value = true;
    fixture.detectChanges();

    let checked = fixture.debugElement.query(By.css('.it7-checkbox-checked'));
    expect(!!checked).toBeTruthy();

    component.value = false;
    fixture.detectChanges();

    checked = fixture.debugElement.query(By.css('.it7-checkbox-checked'));
    expect(!!checked).not.toBeTruthy();
  });

  it('should set css-class "readonly" only when readonly', () => {
    component.readonly = true;
    fixture.detectChanges();

    let readonlyCssClass = fixture.debugElement.query(By.css('.it7-checkbox-readonly'));
    expect(!!readonlyCssClass).toBeTruthy();

    component.readonly = false;
    fixture.detectChanges();

    readonlyCssClass = fixture.debugElement.query(By.css('.it7-checkbox-readonly'));
    expect(!!readonlyCssClass).not.toBeTruthy();
  });

  it('should fire "valueChange" when click', () => {
    let passed: boolean;
    component.value = true;
    component.readonly = false;
    component.valueChange.subscribe(v => (passed = v));
    fixture.detectChanges();

    fixture.debugElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(passed).toBe(false);
  });

  it('should ignore click then readonly', () => {
    let passed: boolean;
    component.value = true;
    component.readonly = true;
    component.valueChange.subscribe(v => (passed = v));
    fixture.detectChanges();

    fixture.debugElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(passed).toBe(undefined);
  });
});
