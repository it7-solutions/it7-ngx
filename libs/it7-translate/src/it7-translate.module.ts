import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {It7TranslateService} from './it7-translate.service';
import {It7TranslatePipe} from './it7-translate.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [It7TranslatePipe],
    exports: [It7TranslatePipe]
})
export class It7TranslateModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: It7TranslateModule,
            providers: [It7TranslateService]
        };
    }
}
