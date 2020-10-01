import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

  transform(items: any[], searTxt: string, key: string): any[] {
    if (!items)
      return [];
    if (!searTxt || !key)
      return items;
    let finalResult = items.filter(item => {
       if(item && item[key])
        return item[key].toLowerCase().indexOf(searTxt.toLowerCase()) > -1
      return
    });
    if (finalResult && finalResult.length > 0) {
      return finalResult;
    } else {
      return [];
    }
  }

}
