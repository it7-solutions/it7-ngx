import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'it7-popup',
  templateUrl: './it7-popup.component.html',
  styleUrls: ['./it7-popup.component.css']
})
export class It7PopupComponent implements OnInit, AfterViewChecked {
  public left = 0;
  public top = 0;

  @ViewChild('popup') popupElement: ElementRef;

  private elementWidth = 0;
  private elementHeight = 0;

  constructor(private changeDetector: ChangeDetectorRef, @Inject(DOCUMENT) private document: any) {}

  ngOnInit() {}

  ngAfterViewChecked() {
    if (this.checkSize()) {
      this.updatePosition();
      this.changeDetector.detectChanges();
    }
  }

  /**
   * Проверяет размер окешка и сели он изменился возвращает true
   */
  private checkSize(): boolean {
    if (this.popupElement) {
      const width = this.popupElement.nativeElement.clientWidth;
      const height = this.popupElement.nativeElement.clientHeight;
      if (width !== this.elementWidth || height !== this.elementHeight) {
        this.elementWidth = width;
        this.elementHeight = height;
        return true;
      }
    }
    return false;
  }

  private updatePosition() {
    this.left = (document.documentElement.clientWidth - this.elementWidth) / 2;
    this.top = (document.documentElement.clientHeight - this.elementHeight) / 2;
  }
}
