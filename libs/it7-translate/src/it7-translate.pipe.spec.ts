import {It7TranslatePipe} from './it7-translate.pipe';
import {It7TranslateService} from './it7-translate.service';

describe('It7TranslatePipe', () => {
    let pipe: It7TranslatePipe;

    beforeEach(() => {
        pipe = new It7TranslatePipe(
            <It7TranslateService>({translate: (t, p) => 'TranslatedText'} as any)
        );
    });

    it('create an instance', () => {
        expect(!!pipe).toBeTruthy();
    });

    it('should call service for translation', () => {
        expect(pipe.transform('Translated text')).toBe('TranslatedText');
    });

});
