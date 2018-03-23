import { TestBed, inject } from '@angular/core/testing';

import { It7AjaxService } from './it7-ajax.service';
import { Http } from '@angular/http';

describe('It7AjaxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        It7AjaxService,
        {
          provide: Http,
          useValue: {} as Http
        }
      ]
    });
  });

  it(
    'should be created',
    inject([It7AjaxService], (service: It7AjaxService) => {
      expect(!!service).toBeTruthy();
    })
  );
});
