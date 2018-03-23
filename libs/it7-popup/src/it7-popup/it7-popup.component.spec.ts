import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { It7PopupComponent } from './it7-popup.component';

describe('ItPopupComponent', () => {
  let component: It7PopupComponent;
  let fixture: ComponentFixture<It7PopupComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [It7PopupComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(It7PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(!!component).toBeTruthy();
  });

  xit('should display tag-content', () => {});
});
