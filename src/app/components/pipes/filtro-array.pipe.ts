import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filtroArray',
    pure: false
})
export class MyFilterPipe implements PipeTransform {
    transform(items: any[], attribute: string, value: any): any {
        if (!items) {
            return [];
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => item[attribute] === value);
    }
}