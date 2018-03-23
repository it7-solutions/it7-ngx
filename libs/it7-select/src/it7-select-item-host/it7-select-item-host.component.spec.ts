import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { It7SelectItemHostComponent } from './it7-select-item-host.component';

describe('It7SelectItemHostComponent', () => {
  let component: It7SelectItemHostComponent;
  let fixture: ComponentFixture<It7SelectItemHostComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [It7SelectItemHostComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(It7SelectItemHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(!!component).toBeTruthy();
  });
});
