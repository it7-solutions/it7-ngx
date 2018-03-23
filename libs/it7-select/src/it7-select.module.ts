import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {It7SelectComponent} from './it7-select/it7-select.component';
import {
    It7SelectChoiceItemHostDirective,
    It7SelectItemHostComponent
} from './it7-select-item-host/it7-select-item-host.component';
import {It7SelectChoicesComponent} from './it7-select-choices/it7-select-choices.component';
import {It7SelectItemComponent} from './it7-select-item/it7-select-item.component';

@NgModule({
    imports: [CommonModule],
    exports: [It7SelectComponent],
    declarations: [
        It7SelectChoiceItemHostDirective,
        It7SelectComponent,
        It7SelectChoicesComponent,
        It7SelectItemHostComponent,
        It7SelectItemComponent
    ],
    entryComponents: [It7SelectItemComponent]
})
export class It7SelectModule {
}
