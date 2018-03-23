import {Injectable} from '@angular/core';

export interface It7TranslateConfigItem {
    code: string;
    value: string;
}

@Injectable()
export class It7TranslateConfig {
    translations: It7TranslateConfigItem[] = [];
}
