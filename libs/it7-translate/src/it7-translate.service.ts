import {Injectable, Injector} from '@angular/core';
import {It7TranslateConfig, It7TranslateConfigItem} from './it7-translate.config';

@Injectable()
export class It7TranslateService {
    private config: It7TranslateConfig;
    private translationsByCode: { [code: string]: string };

    constructor(private injector: Injector) {
        this.config = this.injector.get(It7TranslateConfig, new It7TranslateConfig());
        this.prepareTranslations(this.config.translations);
    }

    public translate(value: any, args?: any): any {
        return this.getTranslationByCode(this.getCodeByText(value), value);
    }

    private getTranslationByCode(code: string, original: string): string {
        return this.translationsByCode[code] ? this.translationsByCode[code] : original;
    }

    private getCodeByText(text: string): string {
        return text.toLowerCase().replace(/([^a-z0-9])/g, '_');
    }

    private prepareTranslations(translations: It7TranslateConfigItem[]) {
        this.translationsByCode = {};
        translations.forEach(t => {
            this.translationsByCode[t.code] = t.value;
        });
    }
}
