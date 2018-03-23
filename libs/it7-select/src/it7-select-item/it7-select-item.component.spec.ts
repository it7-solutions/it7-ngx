import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { It7SelectItemComponent } from './it7-select-item.component';
import { By } from '@angular/platform-browser';

describe('It7SelectItemComponent', () => {
  let component: It7SelectItemComponent;
  let fixture: ComponentFixture<It7SelectItemComponent>;
  let compiled: Element;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [It7SelectItemComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(It7SelectItemComponent);
    compiled = fixture.debugElement.nativeElement;
    component = fixture.componentInstance;
    component.item = { input: '1', output: 'Input One Label' } as any;
    component.readonly = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(!!component).toBeTruthy();
  });

  it('should display item label', () => {
    expect(compiled.textContent).toContain('Input One Label');
  });

  it('should fire "itemClick" on click if not readonly', () => {
    const button = fixture.debugElement.query(By.css('.it7-select-t-clickable'));
    let called = false;
    component.itemClick.subscribe(() => (called = true));
    button.triggerEventHandler('click', null);
    expect(called).toBe(true);
  });

  it('should not fire "itemClick" on click if readonly', () => {
    const button = fixture.debugElement.query(By.css('.it7-select-t-clickable'));
    let called = false;
    component.readonly = true;
    component.itemClick.subscribe(() => (called = true));
    button.triggerEventHandler('click', null);
    expect(called).toBe(false);
  });
});
