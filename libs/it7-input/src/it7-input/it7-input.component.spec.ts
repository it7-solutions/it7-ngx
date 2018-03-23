import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { It7InputComponent } from './it7-input.component';
import { FormsModule } from '@angular/forms';

describe('It7InputComponent', () => {
  let component: It7InputComponent;
  let fixture: ComponentFixture<It7InputComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [It7InputComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(It7InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(!!component).toBeTruthy();
  });

  xit('should create input', () => {});

  xit('should pass value to input', () => {});

  xit('should fire "valueChange" on change input value', () => {});
});
