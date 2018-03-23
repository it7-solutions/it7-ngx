import {Pipe, PipeTransform} from '@angular/core';
import {It7TranslateService} from './it7-translate.service';

@Pipe({
    name: 'it7Translate'
})
export class It7TranslatePipe implements PipeTransform {

    constructor(private service: It7TranslateService) {
    }

    transform(value: any, args?: any): any {
        return this.service.translate(value, args);
    }

}
