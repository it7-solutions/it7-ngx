import {
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { It7SelectChoice } from '../defs/it7-select-options-choice';

import { Directive, ViewContainerRef } from '@angular/core';
import { It7SelectItemComponent } from '../it7-select-item/it7-select-item.component';

@Directive({
  selector: '[it7SelectItemHost]'
})
export class It7SelectChoiceItemHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}

@Component({
  selector: 'it7-select-item-host',
  templateUrl: './it7-select-item-host.component.html',
  styleUrls: ['./it7-select-item-host.component.css']
})
export class It7SelectItemHostComponent implements OnInit, OnChanges {
  @Input() public itemComponent: It7SelectItemComponent;

  @Input() public item: It7SelectChoice;

  @Input() public readonly: boolean;

  @Output() public itemClick = new EventEmitter();

  @ViewChild(It7SelectChoiceItemHostDirective) private itemHost: It7SelectChoiceItemHostDirective;
  private itemInstance: It7SelectItemComponent;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    const component = this.itemComponent ? this.itemComponent : It7SelectItemComponent;
    this.loadComponent(component);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (undefined !== changes['item'] && !changes['item'].firstChange) {
      this.updateItemData();
    }
  }

  public onClick() {
    this.itemClick.emit();
  }

  private loadComponent(component: any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef = this.itemHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    this.itemInstance = <It7SelectItemComponent>componentRef.instance;

    this.updateItemData();
    this.itemInstance.itemClick.subscribe(() => this.itemClick.emit());
  }

  private updateItemData() {
    this.itemInstance.item = this.item;
    this.itemInstance.readonly = this.readonly;
  }
}
