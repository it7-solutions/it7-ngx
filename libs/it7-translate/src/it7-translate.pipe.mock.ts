import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'it7Translate'
})
export class It7TranslateMockPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        return '[' + value + ']';
    }

}
