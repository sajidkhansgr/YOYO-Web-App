import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

  transform(items: any[], searTxt: any, key: string): any[] {
    if (!items)
      return [];
    if (!searTxt || !key || typeof(searTxt)==='object')
      return items;
    let finalRes = items.filter(item => {
       if(item && item[key])
        return item[key].toLowerCase().indexOf(searTxt.toLowerCase()) > -1
      return
    });
    if (finalRes && finalRes.length > 0) {
      return finalRes;
    } else {
      return [];
    }
  }

}
