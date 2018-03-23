import { TestBed, inject } from '@angular/core/testing';

import { It7TranslateService } from './it7-translate.service';
import {It7TranslateConfig} from './it7-translate.config';

describe('It7TranslateService', () => {
  beforeEach(() => {

    const translateConfig = new It7TranslateConfig();
    translateConfig.translations = [
        {
            code: 'translated_text',
            value: 'La translated text'
        }
    ];

    TestBed.configureTestingModule({
      providers: [
          {provide: It7TranslateConfig, useValue: translateConfig},
          It7TranslateService
      ]
    });
  });

  it('should be created', inject([It7TranslateService], (service: It7TranslateService) => {
    expect(!!service).toBeTruthy();
  }));

  it('should translate text', inject([It7TranslateService], (service: It7TranslateService) => {
    expect(service.translate('Translated text')).toBe('La translated text');
  }));
});
